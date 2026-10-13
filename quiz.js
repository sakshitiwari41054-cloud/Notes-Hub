/* Quiz: pick a subject, answer multiple choice questions, see the score and review mistakes. */
(function () {
  "use strict";

  var NH = window.NH;
  var root = document.getElementById("quizRoot");
  if (!NH || !root) return;

  var BANK = window.QUIZ || [];
  var PER_QUIZ = 10;
  var BKEY = "noteshub.quizbest.v1";
  var LETTERS = ["A", "B", "C", "D"];

  var best = loadBest();
  var chosen = "all";          // selected subject on the start screen
  var game = null;             // running quiz
  var scrollNext = false;

  /* ---------- helpers ---------- */
  function loadBest() {
    try {
      var b = JSON.parse(localStorage.getItem(BKEY));
      if (b && typeof b === "object") return b;
    } catch (e) { /* ignore */ }
    return {};
  }

  function saveBest() {
    try { localStorage.setItem(BKEY, JSON.stringify(best)); } catch (e) { /* ignore */ }
  }

  function shuffle(a) {
    var r = a.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }

  function poolFor(key) {
    return key === "all" ? BANK : BANK.filter(function (q) { return q.s === key; });
  }

  function subjectBadge(key) {
    var s = NH.subj(key);
    return "<span class=\"badge subject\" style=\"--c:" + s.color + "\">" + s.icon + " " + NH.esc(s.name) + "</span>";
  }

  function show(html) {
    root.innerHTML = html;
    if (scrollNext) {
      scrollNext = false;
      var top = root.getBoundingClientRect().top;
      if (top < 70 || top > window.innerHeight * 0.5) {
        root.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }

  /* ---------- start screen ---------- */
  function startScreen() {
    game = null;

    if (!BANK.length) {
      show("<div class=\"panel\"><h2>🎯 Quiz</h2><p>No quiz questions found. Add some in <code>quiz-data.js</code>.</p></div>");
      return;
    }

    var chips = chipHtml("all", "Mixed", "🎲", "var(--accent)");
    Object.keys(NH.SUBJECTS).forEach(function (k) {
      if (poolFor(k).length) chips += chipHtml(k, NH.SUBJECTS[k].name, NH.SUBJECTS[k].icon, NH.SUBJECTS[k].color);
    });

    var n = Math.min(PER_QUIZ, poolFor(chosen).length);
    show(
      "<div class=\"panel\">" +
      "<h2>🎯 Test yourself</h2>" +
      "<p class=\"muted\">Pick a subject and answer " + PER_QUIZ + " quick questions. You get the answer and a short explanation after every question.</p>" +
      "<p class=\"label\">Subject</p>" +
      "<div class=\"chips\" id=\"qChips\" role=\"group\" aria-label=\"Choose a quiz subject\">" + chips + "</div>" +
      "<p class=\"muted\" style=\"margin-top:14px\" id=\"qInfo\">" + infoText(n) + "</p>" +
      "<button type=\"button\" class=\"btn big\" id=\"qStart\">Start quiz 🚀</button>" +
      "</div>"
    );
  }

  function infoText(n) {
    return "📝 " + n + " question" + (n === 1 ? "" : "s") + " in this quiz" + bestText(chosen);
  }

  function bestText(key) {
    var b = best[key];
    return b ? " &middot; 🏆 Your best: <strong>" + b.score + "/" + b.total + "</strong>" : "";
  }

  function chipHtml(key, label, icon, color) {
    var on = chosen === key;
    var b = best[key];
    return "<button type=\"button\" class=\"chip" + (on ? " on" : "") + "\" data-s=\"" + key + "\" aria-pressed=\"" + on +
      "\" style=\"--c:" + color + "\"><span class=\"ico\" aria-hidden=\"true\">" + icon + "</span>" + NH.esc(label) +
      (b ? " <span class=\"n\">🏆 " + b.score + "/" + b.total + "</span>" : "") + "</button>";
  }

  /* ---------- playing ---------- */
  function begin() {
    var pool = shuffle(poolFor(chosen)).slice(0, PER_QUIZ);
    game = {
      subject: chosen,
      items: pool.map(function (q) {
        var opts = shuffle(q.o.map(function (t, i) { return { t: t, ok: i === q.a }; }));
        return { q: q, opts: opts, picked: -1 };
      }),
      i: 0,
      score: 0,
      answered: false
    };
    scrollNext = true;
    question();
  }

  function question() {
    var it = game.items[game.i];
    var total = game.items.length;
    var pct = Math.round((game.i / total) * 100);

    var opts = it.opts.map(function (o, i) {
      return "<button type=\"button\" class=\"opt\" data-i=\"" + i + "\"><span class=\"key\">" + LETTERS[i] +
        "</span><span class=\"txt\">" + NH.inline(o.t) + "</span></button>";
    }).join("");

    show(
      "<div class=\"panel\">" +
      "<div class=\"qtop\"><span>Question " + (game.i + 1) + " of " + total + "</span><span>⭐ Score: " + game.score + "</span></div>" +
      "<div class=\"progressbar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"" + total + "\" aria-valuenow=\"" + game.i + "\"><i style=\"width:" + pct + "%\"></i></div>" +
      subjectBadge(it.q.s) +
      "<div class=\"qtext\"><p>" + NH.inline(it.q.q) + "</p></div>" +
      "<div class=\"opts\" id=\"qOpts\">" + opts + "</div>" +
      "<div id=\"qFeedback\" aria-live=\"polite\"></div>" +
      "<div class=\"qnav\"><button type=\"button\" class=\"btn ghost small\" id=\"qQuit\">Quit</button>" +
      "<button type=\"button\" class=\"btn\" id=\"qNext\" hidden></button></div>" +
      "</div>"
    );
    game.answered = false;
  }

  function answer(i) {
    if (!game || game.answered) return;
    var it = game.items[game.i];
    if (!it.opts[i]) return;

    game.answered = true;
    it.picked = i;
    var ok = it.opts[i].ok;
    if (ok) game.score++;

    var btns = root.querySelectorAll(".opt");
    Array.prototype.forEach.call(btns, function (b, k) {
      b.disabled = true;
      if (it.opts[k].ok) b.classList.add("correct");
      else if (k === i) b.classList.add("wrong");
    });

    var cheers = ["Correct! 🎉", "Spot on! ✅", "Nice one! 🙌", "You got it! 💙"];
    var oops = ["Not quite 😅", "Almost! 🤏", "Oops! 🙈"];
    var msg = ok ? cheers[Math.floor(Math.random() * cheers.length)] : oops[Math.floor(Math.random() * oops.length)];

    document.getElementById("qFeedback").innerHTML =
      "<div class=\"feedback " + (ok ? "ok" : "no") + "\"><p><strong>" + msg + "</strong></p><p>" + NH.inline(it.q.e) + "</p></div>";

    var last = game.i === game.items.length - 1;
    var next = document.getElementById("qNext");
    next.textContent = last ? "See my result 🏁" : "Next question ➜";
    next.hidden = false;
    next.focus();

    NH.markStudied();
  }

  function advance() {
    if (!game || !game.answered) return;
    if (game.i < game.items.length - 1) {
      game.i++;
      scrollNext = true;
      question();
    } else {
      finish();
    }
  }

  /* ---------- result ---------- */
  function finish() {
    var total = game.items.length;
    var score = game.score;
    var pct = Math.round((score / total) * 100);

    var prev = best[game.subject];
    var isBest = !prev || score > prev.score || (score === prev.score && total > prev.total);
    if (isBest) {
      best[game.subject] = { score: score, total: total };
      saveBest();
    }

    var trophy, msg;
    if (pct >= 90) { trophy = "🏆"; msg = "Outstanding! You really know this."; }
    else if (pct >= 70) { trophy = "🎉"; msg = "Great job! Almost perfect."; }
    else if (pct >= 50) { trophy = "👍"; msg = "Good effort! A little revision and you will ace it."; }
    else { trophy = "💪"; msg = "Keep practicing! Read the notes and try again."; }

    var wrong = game.items.filter(function (it) { return !it.opts[it.picked].ok; });
    var review = "";
    if (wrong.length) {
      review = "<p class=\"label\">Review your mistakes</p><ul class=\"review\">" + wrong.map(function (it) {
        var right = it.opts.filter(function (o) { return o.ok; })[0];
        return "<li><p><strong>" + NH.inline(it.q.q) + "</strong></p>" +
          "<p>❌ Your answer: " + NH.inline(it.opts[it.picked].t) + "</p>" +
          "<p>✅ Correct answer: " + NH.inline(right.t) + "</p>" +
          "<p class=\"muted\">" + NH.inline(it.q.e) + "</p></li>";
      }).join("") + "</ul>";
    } else {
      review = "<p class=\"label\">Perfect score! No mistakes to review 🌟</p>";
    }

    scrollNext = true;
    show(
      "<div class=\"panel result\">" +
      "<div class=\"trophy\" aria-hidden=\"true\">" + trophy + "</div>" +
      "<div class=\"score\">" + score + " / " + total + "</div>" +
      "<p><strong>" + pct + "%</strong> &middot; " + msg + "</p>" +
      (isBest && score > 0 ? "<p>🌟 New best for " + NH.esc(game.subject === "all" ? "Mixed" : NH.subj(game.subject).name) + "!</p>" : "") +
      "<div class=\"actions\">" +
      "<button type=\"button\" class=\"btn\" id=\"qAgain\">Try again 🔁</button>" +
      "<button type=\"button\" class=\"btn ghost\" id=\"qChange\">Change subject</button>" +
      "<button type=\"button\" class=\"btn ghost\" id=\"qNotes\">📚 Read the notes</button>" +
      "</div>" + review + "</div>"
    );

    if (pct >= 70) NH.confetti();
  }

  /* ---------- events ---------- */
  root.addEventListener("click", function (e) {
    var t = e.target;

    var chip = t.closest(".chip");
    if (chip && !game) {
      chosen = chip.getAttribute("data-s");
      Array.prototype.forEach.call(root.querySelectorAll(".chip"), function (c) {
        var on = c === chip;
        c.classList.toggle("on", on);
        c.setAttribute("aria-pressed", on);
      });
      document.getElementById("qInfo").innerHTML = infoText(Math.min(PER_QUIZ, poolFor(chosen).length));
      return;
    }

    if (t.closest("#qStart") || t.closest("#qAgain")) { begin(); return; }

    var opt = t.closest(".opt");
    if (opt) { answer(+opt.getAttribute("data-i")); return; }

    if (t.closest("#qNext")) { advance(); return; }
    if (t.closest("#qQuit")) { scrollNext = true; startScreen(); return; }
    if (t.closest("#qChange")) { scrollNext = true; startScreen(); return; }
    if (t.closest("#qNotes")) { NH.showView("library"); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  });

  // Keyboard: 1 to 4 (or A to D) picks an option while a quiz is running.
  document.addEventListener("keydown", function (e) {
    if (!game || game.answered || root.offsetParent === null) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    var k = e.key.toLowerCase();
    var idx = "1234".indexOf(k);
    if (idx < 0) idx = "abcd".indexOf(k);
    if (idx > -1 && k.length === 1) answer(idx);
  });

  startScreen();
})();
