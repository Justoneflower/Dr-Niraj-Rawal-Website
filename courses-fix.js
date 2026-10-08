/* courses-fix.js
   - wallpaper-style hero for all 6 courses
   - removes grey stat banner, Certificate and Lifetime access everywhere */
document.addEventListener("DOMContentLoaded", function () {
  var st = document.createElement('style');
  st.textContent = '.hero-stat-strip{display:none !important;}';
  document.head.appendChild(st);

  /* 1. Hero images + background colour behind pills/buttons */
  var HEROES = {
    superhuman:    ['superhuman-hero.jpg',    '#0a1530'],
    manifestation: ['manifestation-hero.jpg', '#2a1a2e'],
    thirdeye:      ['thirdeye-hero.jpg',      '#0c0a2e'],
    chakra:        ['chakra-hero.jpg',        '#04181f'],
    meditation:    ['meditation-hero.jpg',    '#0b2530']
  };
  Object.keys(HEROES).forEach(function (k) {
    var hero = document.querySelector('#panel-' + k + ' .course-hero');
    if (!hero) return;
    var h1 = hero.querySelector('h1');
    var pills = hero.querySelector('.course-meta-pills');
    var ctas = hero.querySelector('.course-hero-ctas');
    var img = document.createElement('img');
    img.src = HEROES[k][0];
    img.alt = (h1 ? h1.textContent.replace(/\s+/g, ' ').trim() : k) + ' with Dr. Niraj Rawal';
    img.className = 'course-hero-photo-img';
    var below = document.createElement('div');
    below.className = 'course-hero-photo-below';
    below.style.background = HEROES[k][1];
    if (pills) below.appendChild(pills);
    if (ctas) below.appendChild(ctas);
    hero.className = 'course-hero course-hero-photo';
    hero.removeAttribute('style');
    hero.innerHTML = '';
    hero.appendChild(img);
    hero.appendChild(below);
  });

  /* 2. Grey stat banner: remove from DOM */
  document.querySelectorAll('.hero-stat-strip').forEach(function (e) { e.remove(); });

  /* 3. Certificate pills */
  document.querySelectorAll('.course-meta-pill').forEach(function (p) {
    if (/certificate/i.test(p.textContent)) p.remove();
  });

  /* 4. Sidebar rows (Lifetime / Certificate) */
  document.querySelectorAll('.si-row').forEach(function (r) {
    if (/lifetime|certificate/i.test(r.textContent)) r.remove();
  });

  /* 5. "What is Inside": remove Certificate item, renumber */
  document.querySelectorAll('.inc-item').forEach(function (i) {
    if (/certificate of completion/i.test(i.textContent)) i.remove();
  });
  document.querySelectorAll('.includes-list').forEach(function (list) {
    list.querySelectorAll('.inc-icon').forEach(function (ic, n) {
      ic.textContent = (n + 1 < 10 ? '0' : '') + (n + 1);
    });
  });

  /* 6. Text clean-up */
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var node;
  while ((node = w.nextNode())) {
    var t = node.nodeValue, o = t;
    t = t.replace(' · Lifetime recording access · Certificate included', '');
    t = t.replace(/Lifetime access to all session recordings( to revisit anytime)?\./, 'Access to all session recordings.');
    t = t.replace('available for lifetime access immediately', 'available immediately');
    if (t !== o) node.nodeValue = t;
  }
});
