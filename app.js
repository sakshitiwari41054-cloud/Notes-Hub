(function () {
  "use strict";

  /* ---------- Subjects ---------- */
  var SUBJECTS = {
    fundamentals: { name: "Computer Fundamentals", color: "#a16207", icon: "🖥️" },
    ds:           { name: "Data Structures",       color: "#be185d", icon: "🌳" },
    dbms:         { name: "DBMS",                  color: "#15803d", icon: "🗄️" },
    graphics:     { name: "Computer Graphics",     color: "#0891b2", icon: "🎨" },
    oops:         { name: "OOPs",                  color: "#475569", icon: "🧩" },
    java:         { name: "Java",                  color: "#d9480f", icon: "☕" },
    python:       { name: "Python",                color: "#2b7de9", icon: "🐍" },
    c:            { name: "C",                     color: "#0f8b8d", icon: "⚙️" },
    cpp:          { name: "C++",                   color: "#7048e8", icon: "🚀" }
  };

  var TYPE_LABEL = { note: "Note", question: "Question" };

  var notes = (window.NOTES || []).slice().sort(function (a, b) {
    return String(b.date).localeCompare(String(a.date));
  });

  var state = { subject: "all", type: "all", level: "all", q: "" };

  /* ---------- Helpers ---------- */
  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function subj(key) {
    return SUBJECTS[key] || { name: key, color: "#0284c7", icon: "📘" };
  }

  function fmtDate(d) {
    var dt = new Date(d + "T00:00:00");
    if (isNaN(dt)) return d;
    return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  function isNew(d) {
    var dt = new Date(d + "T00:00:00");
    if (isNaN(dt)) return false;
    var days = (Date.now() - dt.getTime()) / 86400000;
    return days >= 0 && days <= 7;
  }

  /* ---------- Mini formatter ---------- */
  function inline(text) {
    return String(text)
      .split(/(@@[^@]+?@@)/g)
      .map(function (part) {
        if (part.length > 4 && part.slice(0, 2) === "@@" && part.slice(-2) === "@@") {
          return "<code>" + esc(part.slice(2, -2)) + "</code>";
        }
        return esc(part).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      })
      .join("");
  }

  function tableHtml(rows) {
    var cells = function (line) {
      return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
    };
    var head = cells(rows[0]);
    var body = rows.slice(1).filter(function (r) { return !/^\s*\|?\s*:?-{2,}/.test(r); }).map(cells);
    var h = "<div class=\"tablewrap\"><table><thead><tr>" +
      head.map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") +
      "</tr></thead><tbody>";
    body.forEach(function (r) {
      h += "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>";
    });
    return h + "</tbody></table></div>";
  }

  function render(src) {
    var lines = String(src || "").replace(/\r/g, "").split("\n");
    var out = [];
    var i = 0;

    function isSpecial(l) {
      var t = l.trim();
      return t === "" || t.indexOf("~~~") === 0 || /^##\s+/.test(l) || /^\s*-\s+/.test(l) || t.charAt(0) === "|";
    }

    while (i < lines.length) {
      var line = lines[i];
      var t = line.trim();

      if (t.indexOf("~~~") === 0) {
        var lang = t.slice(3).trim();
        var code = [];
        i++;
        while (i < lines.length && lines[i].trim().indexOf("~~~") !== 0) {
          code.push(lines[i]);
          i++;
        }
        i++;
        out.push(
          "<div class=\"codebox\"><div class=\"codebar\"><span>" + esc(lang || "code") + "</span>" +
          "<button type=\"button\" class=\"copy\">Copy</button></div>" +
          "<pre><code>" + esc(code.join("\n")) + "</code></pre></div>"
        );
        continue;
      }

      if (/^##\s+/.test(line)) {
        out.push("<h3>" + inline(line.replace(/^##\s+/, "")) + "</h3>");
        i++;
        continue;
      }

      if (/^\s*-\s+/.test(line)) {
        var items = [];
        while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
          items.push("<li>" + inline(lines[i].replace(/^\s*-\s+/, "")) + "</li>");
          i++;
        }
        out.push("<ul>" + items.join("") + "</ul>");
        continue;
      }

      if (t.charAt(0) === "|") {
        var rows = [];
        while (i < lines.length && lines[i].trim().charAt(0) === "|") {
          rows.push(lines[i]);
          i++;
        }
        out.push(tableHtml(rows));
        continue;
      }

      if (t === "") { i++; continue; }

      var para = [];
      while (i < lines.length && !isSpecial(lines[i])) {
        para.push(inline(lines[i]));
        i++;
      }
      out.push("<p>" + para.join("<br>") + "</p>");
    }

    return out.join("\n");
  }

  /* ---------- Filtering ---------- */
  function haystack(n) {
    return [n.title, n.topic, n.content, n.question, n.answer, subj(n.subject).name, n.level]
      .join(" ").toLowerCase();
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    return notes.filter(function (n) {
      if (state.subject !== "all" && n.subject !== state.subject) return false;
      if (state.type !== "all" && n.type !== state.type) return false;
      if (state.level !== "all" && n.level !== state.level) return false;
      if (q && haystack(n).indexOf(q) === -1) return false;
      return true;
    });
  }

  /* ---------- Rendering the library ---------- */
  function renderStats() {
    var nNotes = notes.filter(function (n) { return n.type === "note"; }).length;
    var nQs = notes.filter(function (n) { return n.type === "question"; }).length;
    var nQuiz = (window.QUIZ || []).length;
    var used = {};
    notes.forEach(function (n) { used[n.subject] = true; });
    $("stats").innerHTML =
      "<li>📝 <strong>" + nNotes + "</strong> Notes</li>" +
      "<li>❓ <strong>" + nQs + "</strong> Questions</li>" +
      "<li>🎯 <strong>" + nQuiz + "</strong> Quiz MCQs</li>" +
      "<li>📚 <strong>" + Object.keys(used).length + "</strong> Subjects</li>";
  }

  function renderChips() {
    var html = chipHtml("all", "All", notes.length, "var(--accent)", "✨");
    Object.keys(SUBJECTS).forEach(function (k) {
      var c = notes.filter(function (n) { return n.subject === k; }).length;
      html += chipHtml(k, SUBJECTS[k].name, c, SUBJECTS[k].color, SUBJECTS[k].icon);
    });
    $("subjectChips").innerHTML = html;
  }

  function chipHtml(key, label, count, color, icon) {
    var on = state.subject === key;
    return "<button type=\"button\" class=\"chip" + (on ? " on" : "") + "\" data-subject=\"" + key +
      "\" aria-pressed=\"" + on + "\" style=\"--c:" + color + "\">" +
      "<span class=\"ico\" aria-hidden=\"true\">" + icon + "</span>" + esc(label) +
      " <span class=\"n\">" + count + "</span></button>";
  }

  function cardHtml(n) {
    var s = subj(n.subject);
    return "<button type=\"button\" class=\"card\" data-id=\"" + esc(n.id) + "\" style=\"--c:" + s.color + "\">" +
      "<div class=\"card-top\">" +
      "<span class=\"badge subject\">" + s.icon + " " + esc(s.name) + "</span>" +
      "<span class=\"badge\">" + esc(TYPE_LABEL[n.type] || n.type) + "</span>" +
      (n.level ? "<span class=\"badge " + esc(n.level) + "\">" + esc(n.level) + "</span>" : "") +
      (isNew(n.date) ? "<span class=\"badge new\">NEW</span>" : "") +
      "</div>" +
      "<h3>" + esc(n.title) + "</h3>" +
      "<div class=\"meta\"><span>" + esc(n.topic || "") + "</span><span>" + esc(fmtDate(n.date)) + "</span></div>" +
      "</button>";
  }

  function renderGrid() {
    var list = filtered();
    $("grid").innerHTML = list.map(cardHtml).join("");
    $("empty").hidden = list.length > 0;
    $("count").textContent = list.length + (list.length === 1 ? " result" : " results");
  }

  function refresh() {
    renderChips();
    renderGrid();
  }

  /* ---------- Toast and confetti ---------- */
  var toastTimer = null;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 3400);
  }

  function confetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var host = document.createElement("div");
    host.className = "confetti";
    host.setAttribute("aria-hidden", "true");
    var em = ["🎉", "✨", "🎊", "⭐", "💙", "📚"];
    for (var i = 0; i < 26; i++) {
      var s = document.createElement("span");
      s.textContent = em[i % em.length];
      s.style.left = (Math.random() * 100) + "%";
      s.style.animationDelay = (Math.random() * 0.6) + "s";
      s.style.fontSize = (16 + Math.random() * 16) + "px";
      host.appendChild(s);
    }
    document.body.appendChild(host);
    setTimeout(function () { if (host.parentNode) host.parentNode.removeChild(host); }, 3400);
  }

  /* ---------- Study streak ---------- */
  var SKEY = "noteshub.streak.v1";

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function today() { return ymd(new Date()); }
  function addDays(str, n) {
    var p = str.split("-");
    return ymd(new Date(+p[0], +p[1] - 1, +p[2] + n));
  }

  function loadStreak() {
    try {
      var s = JSON.parse(localStorage.getItem(SKEY));
      if (s && typeof s.count === "number") return s;
    } catch (e) { /* ignore */ }
    return { count: 0, best: 0, last: "", days: [] };
  }

  function saveStreak() {
    try { localStorage.setItem(SKEY, JSON.stringify(streak)); } catch (e) { /* ignore */ }
  }

  var streak = loadStreak();

  function studiedToday() { return streak.last === today(); }

  function liveCount() {
    var t = today();
    return (streak.last === t || streak.last === addDays(t, -1)) ? streak.count : 0;
  }

  function renderStreakBtn() {
    $("streakNum").textContent = liveCount();
    $("streakBtn").classList.toggle("hot", studiedToday());
  }

  // Call this whenever the student studies: opens a note, answers a quiz question, asks NotesBot.
  function markStudied() {
    var t = today();
    if (streak.last === t) return;
    streak.count = (streak.last === addDays(t, -1)) ? streak.count + 1 : 1;
    streak.last = t;
    streak.best = Math.max(streak.best || 0, streak.count);
    streak.days = (streak.days || []).concat([t]).slice(-60);
    saveStreak();
    renderStreakBtn();

    var n = streak.count;
    if (n === 1) toast("🔥 Streak started! Come back tomorrow to keep it going.");
    else if (n === 7 || n === 30 || n === 100) { toast("🏆 " + n + " days in a row! You are unstoppable!"); confetti(); }
    else toast("🔥 Day " + n + " streak! Keep going!");
  }

  function streakMessage() {
    var n = liveCount();
    if (studiedToday()) return "You studied today ✅ Come back tomorrow to make it " + (n + 1) + " days!";
    if (n > 0) return "Open any note, take a quiz or ask NotesBot today to keep your " + n + "-day streak alive 🔥";
    return "Start today! Open a note, take a quiz or ask NotesBot a question.";
  }

  function weekStrip() {
    var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var t = today();
    var out = "";
    for (var i = 6; i >= 0; i--) {
      var d = addDays(t, -i);
      var p = d.split("-");
      var dow = new Date(+p[0], +p[1] - 1, +p[2]).getDay();
      var done = (streak.days || []).indexOf(d) > -1;
      out += "<div class=\"day" + (done ? " done" : "") + (i === 0 ? " today" : "") + "\" role=\"img\" aria-label=\"" +
        (i === 0 ? "Today" : names[dow]) + (done ? ": studied" : ": not studied") + "\">" +
        "<i>" + (done ? "🔥" : "") + "</i><span>" + (i === 0 ? "Today" : names[dow]) + "</span></div>";
    }
    return out;
  }

  function openStreak() {
    var n = liveCount();
    openDialog(
      "<h2 id=\"dlgTitle\">Your study streak</h2>" +
      "<div class=\"streak-hero\"><span class=\"flame\" aria-hidden=\"true\">" + (n > 0 ? "🔥" : "💤") + "</span>" +
      "<div><span class=\"num\">" + n + "</span> <span class=\"unit\">day" + (n === 1 ? "" : "s") + " in a row</span></div></div>" +
      "<div class=\"week\">" + weekStrip() + "</div>" +
      "<ul class=\"mini-stats\"><li>🏆 Best streak: <strong>" + (streak.best || 0) + "</strong></li>" +
      "<li>📅 Days studied: <strong>" + (streak.days || []).length + "</strong></li></ul>" +
      "<p class=\"muted\">" + esc(streakMessage()) + "</p>"
    );
  }

  /* ---------- Dialog ---------- */
  var dlgFocus = null;

  function openDialog(html) {
    $("dlgBody").innerHTML = html;
    $("dlg").hidden = false;
    document.body.classList.add("lock");
    dlgFocus = document.activeElement;
    document.querySelector(".dialog").focus();
  }

  function closeDialog() {
    if ($("dlg").hidden) return;
    $("dlg").hidden = true;
    if ($("overlay").hidden) document.body.classList.remove("lock");
    if (dlgFocus && dlgFocus.focus) dlgFocus.focus();
  }

  /* ---------- Tabs ---------- */
  var VIEWS = ["library", "quiz", "ask"];

  function showView(name) {
    VIEWS.forEach(function (v) {
      var on = v === name;
      $("view-" + v).hidden = !on;
      $("tab-" + v).setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  /* ---------- Reader ---------- */
  var lastFocus = null;

  function openReader(id, fromHash) {
    var n = notes.filter(function (x) { return x.id === id; })[0];
    if (!n) return;
    var s = subj(n.subject);

    var reader = document.querySelector(".reader");
    reader.style.setProperty("--c", s.color);

    $("readerMeta").innerHTML =
      "<span class=\"badge subject\" style=\"--c:" + s.color + "\">" + s.icon + " " + esc(s.name) + "</span>" +
      "<span class=\"badge\">" + esc(TYPE_LABEL[n.type] || n.type) + "</span>" +
      (n.topic ? "<span class=\"badge\">" + esc(n.topic) + "</span>" : "") +
      (n.level ? "<span class=\"badge " + esc(n.level) + "\">" + esc(n.level) + "</span>" : "");

    $("readerTitle").textContent = n.title;

    var body = "";
    if (n.type === "question") {
      body =
        "<div class=\"qbox\"><p class=\"qlabel\">Question</p>" + render(n.question) + "</div>" +
        "<button type=\"button\" class=\"btn\" id=\"revealBtn\" aria-expanded=\"false\">Show answer 👀</button>" +
        "<div class=\"answer\" id=\"answerBox\" hidden><h3>Answer</h3>" + render(n.answer) + "</div>";
    } else {
      body = render(n.content);
    }
    $("readerBody").innerHTML = body;

    var foot = "<span>Upload: " + esc(fmtDate(n.date)) + "</span>";
    if (n.file) {
      foot += "<a class=\"btn\" href=\"" + esc(n.file) + "\" target=\"_blank\" rel=\"noopener\">Open PDF 📄</a>";
    }
    foot += "<button type=\"button\" class=\"btn ghost\" id=\"shareBtn\">Copy link 🔗</button>";
    $("readerFoot").innerHTML = foot;

    lastFocus = document.activeElement;
    closeDialog();
    $("overlay").hidden = false;
    document.body.classList.add("lock");
    $("overlay").scrollTop = 0;
    reader.focus();

    if (!fromHash) {
      try { history.replaceState(null, "", "#" + encodeURIComponent(n.id)); } catch (e) { /* ignore */ }
    }

    markStudied();
  }

  function closeReader() {
    if ($("overlay").hidden) return;
    $("overlay").hidden = true;
    if ($("dlg").hidden) document.body.classList.remove("lock");
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function copyText(text, btn, doneLabel) {
    var original = btn ? btn.textContent : "";
    function done() {
      if (!btn) return;
      btn.textContent = doneLabel;
      setTimeout(function () { btn.textContent = original; }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- Events ---------- */
  function bind() {
    $("search").addEventListener("input", function (e) {
      state.q = e.target.value;
      showView("library");
      renderGrid();
    });

    $("tabs").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-view]");
      if (b) showView(b.getAttribute("data-view"));
    });

    $("subjectChips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      state.subject = b.getAttribute("data-subject");
      refresh();
    });

    $("typeSeg").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      state.type = b.getAttribute("data-type");
      Array.prototype.forEach.call($("typeSeg").children, function (x) {
        var on = x === b;
        x.classList.toggle("on", on);
        x.setAttribute("aria-pressed", on);
      });
      renderGrid();
    });

    $("levelSel").addEventListener("change", function (e) {
      state.level = e.target.value;
      renderGrid();
    });

    $("resetBtn").addEventListener("click", function () {
      state = { subject: "all", type: "all", level: "all", q: "" };
      $("search").value = "";
      $("levelSel").value = "all";
      Array.prototype.forEach.call($("typeSeg").children, function (x) {
        var on = x.getAttribute("data-type") === "all";
        x.classList.toggle("on", on);
        x.setAttribute("aria-pressed", on);
      });
      refresh();
    });

    $("grid").addEventListener("click", function (e) {
      var c = e.target.closest(".card");
      if (c) openReader(c.getAttribute("data-id"));
    });

    $("closeBtn").addEventListener("click", closeReader);

    $("overlay").addEventListener("click", function (e) {
      if (e.target === $("overlay")) closeReader();
    });

    $("streakBtn").addEventListener("click", openStreak);
    $("dlgClose").addEventListener("click", closeDialog);
    $("dlg").addEventListener("click", function (e) {
      if (e.target === $("dlg")) closeDialog();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (!$("dlg").hidden) closeDialog();
        else closeReader();
      }
      var tag = (e.target && e.target.tagName) || "";
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && $("overlay").hidden && $("dlg").hidden) {
        e.preventDefault();
        $("search").focus();
      }
    });

    $("readerBody").addEventListener("click", function (e) {
      var copy = e.target.closest(".copy");
      if (copy) {
        var code = copy.closest(".codebox").querySelector("code").textContent;
        copyText(code, copy, "Copied ✅");
        return;
      }
      var rev = e.target.closest("#revealBtn");
      if (rev) {
        var box = $("answerBox");
        var show = box.hidden;
        box.hidden = !show;
        rev.textContent = show ? "Hide answer 🙈" : "Show answer 👀";
        rev.setAttribute("aria-expanded", show);
      }
    });

    $("readerFoot").addEventListener("click", function (e) {
      var share = e.target.closest("#shareBtn");
      if (share) copyText(location.href, share, "Link copied ✅");
    });

    window.addEventListener("hashchange", function () {
      var id = decodeURIComponent(location.hash.slice(1));
      if (id) openReader(id, true);
    });
  }

  /* ---------- Share helpers with quiz.js and ask.js ---------- */
  window.NH = {
    notes: notes,
    SUBJECTS: SUBJECTS,
    subj: subj,
    esc: esc,
    inline: inline,
    render: render,
    openReader: openReader,
    markStudied: markStudied,
    showView: showView,
    copyText: copyText,
    toast: toast,
    confetti: confetti
  };

  /* ---------- Start ---------- */
  renderStats();
  renderStreakBtn();
  refresh();
  bind();

  var startId = decodeURIComponent(location.hash.slice(1));
  if (startId) openReader(startId, true);
})();
