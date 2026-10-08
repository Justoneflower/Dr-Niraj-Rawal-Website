/* coming-soon.js  (for course-portal.html)
   Every course is labelled "Coming Soon" and cannot be opened,
   EXCEPT the keys listed in OPEN_COURSES below. */
document.addEventListener('DOMContentLoaded', function () {

  var OPEN_COURSES = ['fear'];   // add more keys here later to open them, e.g. ['fear','meditation']

  var CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

  var css = document.createElement('style');
  css.textContent =
    '.cl-card.soon{cursor:default;}' +
    '.cl-card.soon:hover{transform:none;box-shadow:0 10px 30px rgba(31,42,90,.06);border-color:var(--line);}' +
    '.cl-card.soon .cl-thumb-img{filter:grayscale(.35) brightness(.78);}' +
    '.cl-card.soon .cl-lock-badge{background:rgba(201,164,92,.92);color:#1a1f36;border-color:rgba(255,255,255,.35);}' +
    '.cl-card.soon .cl-lock-center{display:none;}' +
    '.cl-card.soon .cl-price{color:var(--gold);}' +
    '.cl-card.soon .cl-view-link{color:var(--ink-muted);}';
  document.head.appendChild(css);

  /* Block opening of the detail / booking window for coming-soon courses */
  var origOpen = window.openDetail;
  window.openDetail = function (key) {
    if (OPEN_COURSES.indexOf(key) === -1) return;
    origOpen(key);
  };

  /* Re-label the cards every time the catalog is drawn */
  function decorate() {
    var keys = Object.keys(COURSES);
    var cards = document.querySelectorAll('#clGrid .cl-card');
    cards.forEach(function (card, i) {
      var key = keys[i];
      if (OPEN_COURSES.indexOf(key) !== -1) return;
      card.classList.add('soon');

      var badge = card.querySelector('.cl-lock-badge');
      if (badge) { badge.classList.remove('unlocked'); badge.innerHTML = CLOCK + 'Coming Soon'; }

      var price = card.querySelector('.cl-price');
      if (price) { price.classList.remove('owned'); price.innerHTML = 'Coming Soon<span>Stay tuned</span>'; }

      var link = card.querySelector('.cl-view-link');
      if (link) link.textContent = 'Launching soon';
    });
  }

  var origRender = window.renderCatalog;
  window.renderCatalog = function () { origRender(); decorate(); };
  window.renderCatalog();
});
