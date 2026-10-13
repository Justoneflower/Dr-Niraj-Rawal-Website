/* ════════════════════════════════════════════════════════
   Home page: "What are you feeling today?" search section
   (inserted right before the Course Preview section)
   + site fixes: no purple quote line, no small kicker headings,
     course links styled as real buttons
   ════════════════════════════════════════════════════════ */
(function () {
  var L = window.InsLib;
  if (!L) return;

  /* ── Site fixes ── */
  var fix = document.createElement('style');
  fix.textContent = '' +
    /* 1. remove the purple vertical line beside the hero quote */
    '.hero-proof{border-left:none!important;padding-left:0!important;margin-left:0!important}' +
    '.hero-proof::before,.hero-proof::after{display:none!important}' +
    /* 2. remove small sub-headings (Our Impact, Identify Your Challenge, etc.) */
    '.sec-kicker,.st-kicker,.tc-kicker{display:none!important}' +
    /* 3. make course links look like real buttons */
    '.course-cta{display:flex!important;align-items:center;justify-content:center;gap:8px;width:100%;box-sizing:border-box;text-align:center;text-decoration:none!important;' +
      'background:linear-gradient(135deg,#4b2fb0,#2a1f5f)!important;color:#fff!important;font-weight:700;font-size:15px;padding:14px 20px;border-radius:999px;border:none;' +
      'box-shadow:0 6px 16px rgba(75,47,176,.32);cursor:pointer;transition:transform .15s,box-shadow .15s}' +
    '.course-cta::after{content:"\\2192"!important;display:inline-block!important;position:static!important;transition:transform .15s}' +
    '.course-cta:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(75,47,176,.42)}' +
    '.course-cta:hover::after{transform:translateX(4px)}' +
    '.course-cta-gold{background:linear-gradient(135deg,#e3c676,#c9a84c)!important;color:#1a1535!important;box-shadow:0 6px 16px rgba(201,168,76,.45)}' +

    /* search section */
    '.ins-search-section{background:linear-gradient(180deg,#faf9ff,#f1eefc);padding:72px 20px;font-family:"DM Sans",sans-serif;text-align:center}' +
    '.ins-wrap{max-width:980px;margin:0 auto}' +
    '.ins-search-section h2{font-family:"Cormorant Garamond",serif;font-size:clamp(32px,5vw,50px);margin:0 0 12px;color:#1a1535}' +
    '.ins-lead{max-width:680px;margin:0 auto 28px;font-size:16px;line-height:1.65;color:#4a4a68}' +
    '.ins-searchbar{display:flex;align-items:center;gap:10px;background:#fff;border:2px solid #d9d4f2;border-radius:999px;padding:8px 8px 8px 22px;box-shadow:0 10px 30px rgba(42,31,95,.12);max-width:820px;margin:0 auto;transition:border-color .2s}' +
    '.ins-searchbar:focus-within{border-color:#4b2fb0}' +
    '.ins-searchbar svg{width:22px;height:22px;color:#7b6fc4;flex-shrink:0}' +
    '.ins-searchbar input{flex:1;min-width:0;border:none;outline:none;font-size:17px;font-family:"DM Sans",sans-serif;color:#1a1535;background:transparent;padding:12px 4px}' +
    '.ins-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:18px auto 0;max-width:820px}' +
    '.ins-chip{background:#fff;border:1px solid #d9d4f2;color:#4b2fb0;font-weight:600;font-size:13.5px;padding:8px 16px;border-radius:999px;cursor:pointer;font-family:"DM Sans",sans-serif;transition:all .15s}' +
    '.ins-chip:hover{background:#4b2fb0;color:#fff;border-color:#4b2fb0}' +
    '#insResults{margin-top:34px;text-align:left}' +
    '.ins-res-label{font-size:20px;font-weight:700;color:#1a1535;margin:0 0 14px;font-family:"DM Sans",sans-serif}' +
    '.ins-res-label span{color:#4b2fb0}' +
    '.ins-res-sub{font-size:14px;color:#6a6a88;margin:-8px 0 14px}' +
    '.ins-matches{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-bottom:34px}' +
    '.ins-more{background:rgba(255,255,255,.7);border:1px solid #e0dcf4;border-radius:18px;padding:22px}' +
    '.ins-scroll{max-height:560px;overflow-y:auto;padding:4px 8px 4px 2px}' +
    '.ins-scroll::-webkit-scrollbar{width:6px}.ins-scroll::-webkit-scrollbar-thumb{background:rgba(75,47,176,.35);border-radius:6px}' +
    '.ins-all-link{display:flex;justify-content:center;margin-top:20px}' +
    '@media(max-width:600px){.ins-searchbar{padding-left:16px}.ins-searchbar input{font-size:15px}}';
  document.head.appendChild(fix);

  /* ── Build section ── */
  var sec = document.createElement('section');
  sec.className = 'ins-search-section';
  sec.id = 'installations-search';
  sec.innerHTML =
    '<div class="ins-wrap">' +
      '<h2>What are you feeling today?</h2>' +
      '<p class="ins-lead">Explore more installations by Dr. Niraj Rawal. Type what you are going through, like <b>sad</b>, <b>angry</b> or <b>insecure</b>, and the installation made for that feeling opens right here. Each installation is ' + L.rupees(L.price) + '.</p>' +
      '<div class="ins-searchbar">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
        '<input id="insQ" type="text" autocomplete="off" placeholder="Type how you feel… sad, angry, insecure, afraid" aria-label="What are you feeling today?"/>' +
        '<button type="button" class="ins-btn" id="insGo">Find Installation</button>' +
      '</div>' +
      '<div class="ins-chips" id="insChips"></div>' +
      '<div id="insResults"></div>' +
    '</div>';

  var courses = document.getElementById('courses');
  if (courses && courses.parentNode) courses.parentNode.insertBefore(sec, courses);
  else document.getElementById('page').appendChild(sec);

  var input = document.getElementById('insQ');
  var results = document.getElementById('insResults');
  var chips = document.getElementById('insChips');

  ['sad', 'angry', 'insecure', 'afraid', 'anxious', 'lonely', 'overthinking', 'heartbroken', 'stressed', 'jealous'].forEach(function (w) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ins-chip';
    b.textContent = w;
    b.addEventListener('click', function () { input.value = w; render(); });
    chips.appendChild(b);
  });

  function render() {
    var q = input.value.trim();
    if (!q) { results.innerHTML = ''; return; }
    var r = L.search(q);
    var html = '';
    if (r.matches.length) {
      html += '<h3 class="ins-res-label">Best match for &ldquo;<span>' + L.esc(q) + '</span>&rdquo;</h3>' +
              '<div class="ins-matches">' + r.matches.map(function (m, i) { return L.card(m, i === 0); }).join('') + '</div>';
    } else {
      html += '<h3 class="ins-res-label">No exact match for &ldquo;<span>' + L.esc(q) + '</span>&rdquo;</h3>' +
              '<p class="ins-res-sub">Try another word, or browse every installation below.</p>';
    }
    html += '<div class="ins-more">' +
              '<h3 class="ins-res-label">Explore all ' + (r.matches.length ? 'other ' : '') + 'installations</h3>' +
              '<div class="ins-scroll"><div class="ins-grid">' + r.rest.map(function (i) { return L.card(i); }).join('') + '</div></div>' +
              '<div class="ins-all-link"><a class="ins-btn" href="installations.html">View All Installations &rarr;</a></div>' +
            '</div>';
    results.innerHTML = html;
  }

  input.addEventListener('input', render);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); render(); } });
  document.getElementById('insGo').addEventListener('click', function () {
    render();
    if (results.firstChild) results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
