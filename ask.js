/*
  NotesBot: the "Ask" tab.
  The student types a question and the bot answers using the notes and questions on this site.
  It works fully offline (no internet and no API key). It can only answer topics that are in the notes.
*/
(function () {
  "use strict";

  var NH = window.NH;
  var log = document.getElementById("chatLog");
  var form = document.getElementById("chatForm");
  var input = document.getElementById("chatInput");
  var suggestBox = document.getElementById("chatSuggest");
  var clearBtn = document.getElementById("chatClear");
  if (!NH || !log || !form || !input) return;

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var SUGGEST = [
    "What is normalization?",
    "Difference between array and linked list",
    "What is Java?",
    "Explain the DDA algorithm",
    "What is polymorphism?",
    "Features of Python",
    "String vs StringBuilder",
    "What are the ACID properties?"
  ];

  /* ---------- text processing ---------- */
  // Plain objects inherit keys such as "constructor", so every lookup table here has no prototype.
  function toSet(str) {
    var o = Object.create(null);
    str.split(/\s+/).forEach(function (w) { if (w) o[w] = true; });
    return o;
  }

  // Common English and Hinglish filler words that carry no topic.
  var STOP = toSet(
    "a an the is are was were be been am of in on at to for and or but if then so as by from with without into than that this these those " +
    "it its i me my you your we our they them he she his her what which who whom whose how why when where do does did done can could should " +
    "would will shall may might must have has had having there here about tell explain give show please define meaning mean difference " +
    "differences between vs versus compare comparison example examples code program programs write hi hello hey hii hlo thanks thank thx namaste " +
    "kya hai hain ho hota hoti hote ka ki ke ko mein me se par aur ya batao bata btao samjhao samjha kaise kyu kyun kab kaun iska uska " +
    "yeh ye woh wo kuch sab bhi nahi nhi tum aap mujhe hume hum"
  );

  function stem(w) {
    if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + "y";
    if (w.length > 6 && /ing$/.test(w)) return w.slice(0, -3);
    if (w.length > 5 && /ed$/.test(w)) return w.slice(0, -2);
    if (w.length > 4 && /(ses|xes|ches|shes)$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && /s$/.test(w) && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
    return w;
  }

  function rawWords(text) {
    var s = String(text || "").toLowerCase()
      .replace(/c\+\+/g, " cpp ")
      .replace(/c#/g, " csharp ")
      .replace(/cplusplus/g, " cpp ");
    return s.match(/[a-z0-9]+/g) || [];
  }

  function expand(w) {
    if (w === "ds" || w === "dsa") return ["data", "structure"];
    if (w === "oops") return ["oop"];
    return [w];
  }

  function tokens(text) {
    var out = [];
    rawWords(text).forEach(function (w0) {
      expand(w0).forEach(function (w) {
        if (STOP[w]) return;
        if (w.length < 2 && w !== "c") return;
        out.push(stem(w));
      });
    });
    return out;
  }

  function uniq(arr) {
    var seen = Object.create(null);
    return arr.filter(function (x) { if (seen[x]) return false; seen[x] = true; return true; });
  }

  function setOf(arr) {
    var o = Object.create(null);
    arr.forEach(function (x) { o[x] = true; });
    return o;
  }

  var SUBJECT_WORDS = Object.assign(Object.create(null), {
    java: "java", python: "python", cpp: "cpp", c: "c", dbms: "dbms", sql: "dbms", oop: "oops", oops: "oops",
    graphics: "graphics", fundamentals: "fundamentals", ds: "ds", dsa: "ds"
  });

  /* ---------- build the search index (once) ---------- */
  var chunks = [];
  var df = Object.create(null);

  function addChunk(n, head, raw, kind) {
    var c = { id: n.id, kind: kind, subject: n.subject, title: n.title, head: head, raw: raw, n: n };
    c.titleT = setOf(tokens(n.title));
    c.headT = setOf(tokens(head));
    c.topicT = setOf(tokens(n.topic || ""));
    var body = kind === "q" ? (n.question + "\n" + n.answer) : raw;
    c.tf = Object.create(null);
    tokens(body).forEach(function (t) { c.tf[t] = (c.tf[t] || 0) + 1; });
    c.code = body.indexOf("~~~") > -1;
    chunks.push(c);

    var all = Object.create(null);
    [c.titleT, c.headT, c.topicT, c.tf].forEach(function (m) { Object.keys(m).forEach(function (k) { all[k] = true; }); });
    Object.keys(all).forEach(function (k) { df[k] = (df[k] || 0) + 1; });
  }

  (NH.notes || []).forEach(function (n) {
    if (n.type === "question") {
      addChunk(n, "", "", "q");
    } else {
      String(n.content || "").split(/\n(?=## )/).forEach(function (part) {
        var m = part.match(/^## (.+)/);
        addChunk(n, m ? m[1].trim() : "Overview", part.trim(), "n");
      });
    }
  });

  function idf(t) { return Math.log(1 + chunks.length / (1 + (df[t] || 0))); }

  /* ---------- searching ---------- */
  function scoreChunk(c, qt, ctx) {
    var s = 0, hit = 0;
    qt.forEach(function (t) {
      var x = 0;
      if (c.titleT[t]) x += 5;
      if (c.headT[t]) x += 3;
      if (c.topicT[t]) x += 2;
      var f = c.tf[t] || 0;
      if (f) x += Math.min(f, 3) * 0.6;
      if (x > 0) { hit++; s += idf(t) * x; }
    });
    if (!hit) return 0;
    s *= 0.4 + hit / qt.length;

    if (ctx.subjects[c.subject]) s *= 2;
    if (ctx.def && c.kind === "n" && /^definition$/i.test(c.head)) s *= 1.6;
    if (ctx.def && c.kind === "n" && /^what is/i.test(c.title)) s *= 1.2;
    var isDiffTitle = /\bvs\b|difference/i.test(c.title);
    if (ctx.diff && isDiffTitle) s *= 1.5;
    if (!ctx.diff && isDiffTitle) s *= 0.8;
    var titleKeys = Object.keys(c.titleT);
    if (titleKeys.length && titleKeys.length === qt.length && qt.every(function (t) { return c.titleT[t]; })) s *= 1.6;
    if (ctx.ex && c.code) s *= 1.3;
    if (ctx.kw && /keyword|token/i.test(c.head)) s *= 1.5;
    return s;
  }

  function search(text) {
    var low = text.toLowerCase();
    var words = rawWords(text);
    var ctx = {
      subjects: {},
      def: /\b(what|define|definition|meaning|kya|introduction|intro)\b/.test(low),
      diff: /\b(difference|differences|differ|vs|versus|compare|comparison|between|antar|fark)\b/.test(low),
      ex: /\b(example|examples|code|program|syntax|write|implement)\b/.test(low),
      kw: /\b(keyword|keywords|token|tokens)\b/.test(low)
    };
    words.forEach(function (w) { if (SUBJECT_WORDS[w]) ctx.subjects[SUBJECT_WORDS[w]] = true; });
    if (words.indexOf("data") > -1 && (words.indexOf("structure") > -1 || words.indexOf("structures") > -1)) ctx.subjects.ds = true;

    var qt = uniq(tokens(text));
    var scored = [];
    if (qt.length) {
      chunks.forEach(function (c, i) {
        var s = scoreChunk(c, qt, ctx);
        if (s > 0) scored.push({ i: i, s: s });
      });
      scored.sort(function (a, b) { return b.s - a.s; });
    }
    return { qt: qt, scored: scored };
  }

  var MIN_SCORE = 8;

  function relatedOf(scored, bestIdx) {
    var best = chunks[bestIdx];
    var out = [], seen = {};
    seen[best.id + "|" + best.head] = true;
    for (var k = 0; k < scored.length && out.length < 3; k++) {
      var c = chunks[scored[k].i];
      var key = c.id + "|" + c.head;
      if (seen[key] || scored[k].s < scored[0].s * 0.3) continue;
      seen[key] = true;
      out.push(scored[k].i);
    }
    return out;
  }

  /* ---------- building the reply ---------- */
  function label(c) { return c.title + (c.kind === "n" && c.head ? " › " + c.head : ""); }

  function answerHtml(idx, related) {
    var c = chunks[idx];
    var s = NH.subj(c.subject);
    var src = "<p class=\"src\">" + s.icon + " <strong>" + NH.esc(s.name) + "</strong> &middot; " + NH.esc(label(c)) +
      (c.kind === "q" ? " (question)" : "") + "</p>";

    var body;
    if (c.kind === "q") {
      body = "<div class=\"qbox\" style=\"--c:" + s.color + "\"><p class=\"qlabel\">Question</p>" + NH.render(c.n.question) + "</div>" +
        "<h3>Answer</h3>" + NH.render(c.n.answer);
    } else {
      body = NH.render(c.raw);
    }

    var actions = "<div class=\"bot-actions\"><button type=\"button\" class=\"btn small\" data-open=\"" + NH.esc(c.id) + "\">📖 Open full " +
      (c.kind === "q" ? "question" : "note") + "</button></div>";

    var rel = "";
    if (related && related.length) {
      rel = "<p class=\"rel-label\">You may also like:</p><div class=\"rel-chips\">" + related.map(function (ri) {
        return "<button type=\"button\" data-chunk=\"" + ri + "\">" + NH.esc(label(chunks[ri])) + "</button>";
      }).join("") + "</div>";
    }
    return src + body + actions + rel;
  }

  function pickSuggestions(n) {
    var a = SUGGEST.slice().sort(function () { return Math.random() - 0.5; });
    return a.slice(0, n);
  }

  function notFoundHtml(scored) {
    var near = "";
    var seen = {}, list = [];
    scored.forEach(function (x) {
      var c = chunks[x.i];
      var key = c.id;
      if (!seen[key] && list.length < 3) { seen[key] = true; list.push(x.i); }
    });
    if (list.length) {
      near = "<p class=\"rel-label\">Did you mean:</p><div class=\"rel-chips\">" + list.map(function (ri) {
        return "<button type=\"button\" data-chunk=\"" + ri + "\">" + NH.esc(chunks[ri].title) + "</button>";
      }).join("") + "</div>";
    }
    var tries = pickSuggestions(3).map(function (q) {
      return "<button type=\"button\" data-q=\"" + NH.esc(q) + "\">" + NH.esc(q) + "</button>";
    }).join("");
    return "<p>Hmm, I could not find that in the notes 🤔</p>" +
      "<p class=\"muted\">I only know what is written in the NotesHub notes, so try different words (for example the topic name).</p>" +
      near + "<p class=\"rel-label\">Or try one of these:</p><div class=\"rel-chips\">" + tries + "</div>";
  }

  function smallTalk(text) {
    var low = text.toLowerCase();
    if (/\b(thanks|thank|thx|shukriya|dhanyavad)\b/.test(low)) return "<p>You are welcome! 😊 Keep going, you are doing great! 💪</p>";
    if (/\b(who are you|your name|what are you|kaun ho|tum kaun)\b/.test(low)) {
      return "<p>I am <strong>NotesBot</strong> 🤖, the study helper of NotesHub. I search all the notes and questions on this site and give you the best answer.</p>";
    }
    if (/\b(hi|hii+|hello|hey|hlo|namaste)\b/.test(low)) {
      return "<p>Hi! 👋 Ask me any doubt, for example <em>What is normalization?</em> or <em>Difference between array and linked list</em>.</p>";
    }
    return "<p>Tell me a topic and I will find it in the notes 📚 For example: <em>What is a pointer?</em></p>";
  }

  function respond(text) {
    var r = search(text);
    if (!r.qt.length) return { html: smallTalk(text) + suggestHtml() };
    if (!r.scored.length || r.scored[0].s < MIN_SCORE) return { html: notFoundHtml(r.scored) };
    var best = r.scored[0].i;
    return { html: answerHtml(best, relatedOf(r.scored, best)) };
  }

  function suggestHtml() {
    return "<div class=\"rel-chips\" style=\"margin-top:8px\">" + pickSuggestions(3).map(function (q) {
      return "<button type=\"button\" data-q=\"" + NH.esc(q) + "\">" + NH.esc(q) + "</button>";
    }).join("") + "</div>";
  }

  /* ---------- chat UI ---------- */
  var busy = false;

  function addMsg(cls, html) {
    var d = document.createElement("div");
    d.className = "msg " + cls;
    d.innerHTML = html;
    log.appendChild(d);
    return d;
  }

  function addUser(text) {
    var d = document.createElement("div");
    d.className = "msg me";
    d.textContent = text;
    log.appendChild(d);
    return d;
  }

  function scrollTo(el) {
    var top = Math.max(0, el.offsetTop - 10);
    if (log.scrollTo) log.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    else log.scrollTop = top;
  }

  // Show the answer block by block, like an AI that is typing.
  function reveal(el, done) {
    var kids = Array.prototype.slice.call(el.children);
    if (reduced || kids.length < 2) { done(); return; }
    kids.forEach(function (k, i) { if (i > 0) k.style.display = "none"; });
    var i = 1;
    (function step() {
      if (i >= kids.length) { done(); return; }
      kids[i].style.display = "";
      i++;
      setTimeout(step, 130);
    })();
  }

  function ask(text, forcedChunk) {
    text = String(text || "").trim();
    if (!text || busy) return;
    busy = true;

    var userEl = addUser(text);
    var bot = addMsg("bot", "<span class=\"dots\" aria-label=\"NotesBot is thinking\"><i></i><i></i><i></i></span>");
    scrollTo(userEl);

    setTimeout(function () {
      var res;
      if (forcedChunk != null) {
        var rel = search(text).scored;
        res = { html: answerHtml(forcedChunk, relatedOf(rel.length ? rel : [{ i: forcedChunk, s: 1 }], forcedChunk)) };
      } else {
        res = respond(text);
      }
      bot.innerHTML = res.html;
      reveal(bot, function () { busy = false; });
      NH.markStudied();
    }, reduced ? 0 : 450 + Math.random() * 300);
  }

  function greeting() {
    addMsg("bot",
      "<p>Hi! I am <strong>NotesBot</strong> 🤖</p>" +
      "<p>Ask me any doubt from <strong>Java, Python, C, C++, DBMS, Data Structures, OOPs, Computer Graphics</strong> or <strong>Computer Fundamentals</strong>. I will find the answer in the notes. You can also type in Hinglish 😎</p>"
    );
  }

  function renderSuggest() {
    suggestBox.innerHTML = SUGGEST.map(function (q) {
      return "<button type=\"button\" data-q=\"" + NH.esc(q) + "\">" + NH.esc(q) + "</button>";
    }).join("");
  }

  /* ---------- events ---------- */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value;
    input.value = "";
    ask(v);
  });

  function onClick(e) {
    var q = e.target.closest("[data-q]");
    if (q) { ask(q.getAttribute("data-q")); return; }
    var ch = e.target.closest("[data-chunk]");
    if (ch) { ask(ch.textContent, +ch.getAttribute("data-chunk")); return; }
    var op = e.target.closest("[data-open]");
    if (op) { NH.openReader(op.getAttribute("data-open")); return; }
    var cp = e.target.closest(".copy");
    if (cp) {
      var code = cp.closest(".codebox").querySelector("code").textContent;
      NH.copyText(code, cp, "Copied ✅");
    }
  }
  log.addEventListener("click", onClick);
  suggestBox.addEventListener("click", onClick);

  clearBtn.addEventListener("click", function () {
    log.innerHTML = "";
    busy = false;
    greeting();
  });

  renderSuggest();
  greeting();

  // Exposed so it can be tested.
  NH.askSearch = function (text, n) {
    var r = search(text);
    if (n) {
      return r.scored.slice(0, n).map(function (x) { return { id: chunks[x.i].id, head: chunks[x.i].head, score: Math.round(x.s * 10) / 10 }; });
    }
    var top = r.scored[0];
    return top && top.s >= MIN_SCORE ? { id: chunks[top.i].id, head: chunks[top.i].head, score: top.s } : null;
  };
})();
