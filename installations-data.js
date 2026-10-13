/* ════════════════════════════════════════════════════════
   INSTALLATIONS: catalogue + search + shared styles
   Used by index.html (search section) and installations.html
   To add an installation: add one row to the DATA list below.
   Row format: [id, 'Feeling', 'Replaced with', [keywords...], 'one-line hook']
   ════════════════════════════════════════════════════════ */
(function () {
  var PRICE = 2999;
  var WHATSAPP = '919352080871';

  var DATA = [
    ['sadness', 'Sadness', 'Joy', ['sad','sadness','unhappy','low','down','depressed','blue','gloomy','upset','miserable','crying','cry','heavy heart'], 'When sadness stays too long, it starts to feel like who you are. It is not.'],
    ['anger', 'Anger', 'Calm Power', ['angry','anger','rage','irritated','irritation','frustrated','frustration','furious','temper','short tempered','annoyed','mad','snap'], 'Anger is energy with nowhere to go. Learn to turn it into clear, calm strength.'],
    ['insecurity', 'Insecurity', 'Self-Assurance', ['insecure','insecurity','not enough','unsure','inferior','inferiority','self conscious','doubt','unworthy','comparison','judged'], 'You were never less than anyone. Install the identity that already knows it.'],
    ['fear', 'Fear', 'Courage', ['fear','afraid','scared','frightened','terrified','panic','phobia','worry','nervous','hesitation','dread'], 'Fear is a conditioned response, and what was conditioned can be reconditioned.'],
    ['anxiety', 'Anxiety', 'Inner Calm', ['anxious','anxiety','restless','tension','tense','uneasy','worried','racing heart','on edge','nervousness'], 'Settle the restless mind and give your nervous system a new baseline of calm.'],
    ['overthinking', 'Overthinking', 'Mental Clarity', ['overthinking','overthink','thinking too much','mind chatter','racing thoughts','confused','confusion','indecision','cannot decide','mental fog','loop'], 'Too many thoughts, no decisions. Quiet the loop and think clearly again.'],
    ['loneliness', 'Loneliness', 'Connection', ['lonely','loneliness','alone','isolated','isolation','no one understands','left out','empty','disconnected'], 'Feeling alone is not the same as being alone. Reconnect with yourself and others.'],
    ['guilt', 'Guilt', 'Self-Forgiveness', ['guilt','guilty','regret','remorse','blame myself','my fault','sorry','forgive myself'], 'Release the weight of what you cannot change and walk forward lighter.'],
    ['shame', 'Shame', 'Self-Respect', ['shame','ashamed','embarrassed','embarrassment','humiliated','humiliation','hide','worthless','disgrace'], 'Shame says you are the mistake. Install the truth that you are worthy.'],
    ['jealousy', 'Jealousy', 'Abundance Mindset', ['jealous','jealousy','envy','envious','compare','comparing','resentful of others','not fair','competition'], 'Turn envy into direction and replace scarcity with the belief that there is enough.'],
    ['heartbreak', 'Heartbreak', 'Emotional Healing', ['heartbreak','heartbroken','breakup','break up','ex','betrayal','betrayed','cheated','divorce','broken heart','missing someone','love pain'], 'Heal the wound left by love lost and open your heart again, safely.'],
    ['low-confidence', 'Low Confidence', 'Confidence', ['confidence','low confidence','shy','shyness','hesitant','stage fear','public speaking','self belief','afraid to speak','timid'], 'Confidence is installed, not inherited. Begin speaking and acting without holding back.'],
    ['stress', 'Stress', 'Peace', ['stress','stressed','pressure','tension','burden','overwhelmed','too much','cannot cope','strain','exhausted mind'], 'Release the pressure your body has been carrying and return to ease.'],
    ['hopelessness', 'Hopelessness', 'Hope & Purpose', ['hopeless','hopelessness','no hope','lost','pointless','no purpose','give up','giving up','direction','stuck in life','meaningless','lack of direction'], 'When the road disappears, vision is what returns. Reinstall hope and direction.'],
    ['resentment', 'Resentment', 'Release', ['resentment','resent','grudge','bitter','bitterness','hate','hatred','revenge','cannot forgive','holding on','hurt by family'], 'Holding a grudge is carrying poison for someone else. Put it down.'],
    ['self-worth', 'Low Self-Worth', 'Self-Love', ['self worth','self love','self esteem','worth','hate myself','dislike myself','not good enough','undeserving','unlovable','deserve'], 'Learn to treat yourself as someone who is worth every good thing.'],
    ['procrastination', 'Procrastination', 'Aligned Action', ['procrastination','procrastinate','lazy','laziness','delay','putting off','unmotivated','no motivation','stuck','cannot start','discipline'], 'Dissolve the hidden resistance behind delay and install effortless follow-through.'],
    ['burnout', 'Exhaustion', 'Vital Energy', ['burnout','burnt out','exhausted','exhaustion','tired','fatigue','drained','low energy','no energy','weak','lethargic','energy blocks'], 'Restore your energy at the source, not just with rest.'],
    ['rejection', 'Fear of Rejection', 'Self-Acceptance', ['rejection','rejected','not accepted','people pleasing','people pleaser','approval','fear of judgment','cannot say no','validation','fit in'], 'Stop living for approval. Accept yourself first and rejection loses its power.'],
    ['abandonment', 'Abandonment Wounds', 'Inner Security', ['abandonment','abandoned','left behind','clingy','attachment','fear of losing','fear of loss','separation','neglected','childhood wound'], 'Heal the old fear of being left and feel safe within yourself.'],
    ['trust', 'Trust Issues', 'Healthy Trust', ['trust','trust issues','cannot trust','suspicious','betrayal fear','guarded','walls','doubting people','relationship problems','jealous partner'], 'Take down walls that protect you from pain and from love.'],
    ['scarcity', 'Money Fear', 'Abundance', ['money','money fear','financial','finance','poor','poverty','debt','scarcity','broke','income','lack','financial blocks','unstable income','wealth'], 'Reprogram the beliefs that keep money and opportunity out of reach.'],
    ['perfectionism', 'Perfectionism', 'Self-Acceptance & Flow', ['perfectionism','perfectionist','perfect','fear of failure','failure','mistakes','never satisfied','self criticism','critical','harsh on myself'], 'Release the impossible standard and let progress be enough.'],
    ['grief', 'Grief', 'Peace & Acceptance', ['grief','grieving','loss','death','lost someone','bereavement','mourning','miss','passed away','widow'], 'Honour what you lost while allowing yourself to live fully again.'],
    ['karma', 'Repeating Patterns', 'Freedom', ['karma','karmic','pattern','patterns','same mistakes','repeating','cycle','bad luck','generational','stuck pattern','past life','ancestral'], 'Break the loop of repeating the same struggle again and again.']
  ];

  var INS = DATA.map(function (r) {
    var from = r[1], to = r[2];
    return {
      id: r[0], from: from, to: to, keywords: r[3], hook: r[4],
      name: from + ' to ' + to + ' Installation',
      price: PRICE,
      desc: 'This installation helps you find where ' + from.toLowerCase() + ' first took root in your subconscious, release it, and consciously install ' + to.toLowerCase() + ' in its place, using Dr. Niraj Rawal\'s Awareness + Understanding + Action method.',
      gets: [
        'A guided installation session to release the old ' + from.toLowerCase() + ' pattern',
        'Awareness practice to notice where it shows up in daily life',
        'A daily reinforcement routine to lock in ' + to.toLowerCase(),
        'Access from your My Courses portal'
      ]
    };
  });

  function norm(s) { return (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function rupees(n) { return '₹' + n.toLocaleString('en-IN'); }

  function score(inst, q) {
    var tokens = norm(q).split(' ').filter(Boolean);
    if (!tokens.length) return 0;
    var terms = inst.keywords.map(norm).concat([norm(inst.id), norm(inst.from), norm(inst.to)]);
    var hay = norm(inst.name + ' ' + inst.hook);
    var total = 0;
    tokens.forEach(function (t) {
      var best = 0;
      terms.forEach(function (term) {
        if (term === t) best = Math.max(best, 6);
        else if (t.length >= 3 && term.indexOf(t) === 0) best = Math.max(best, 4);
        else if (term.length >= 4 && t.indexOf(term) === 0) best = Math.max(best, 3);
        else if (t.length >= 3 && term.indexOf(t) > -1) best = Math.max(best, 2);
        else if (term.split(' ').indexOf(t) > -1) best = Math.max(best, 4);
      });
      if (!best && t.length >= 3 && hay.indexOf(t) > -1) best = 1;
      total += best;
    });
    return total;
  }

  function search(q) {
    var scored = INS.map(function (i) { return { i: i, s: score(i, q) }; });
    var hits = scored.filter(function (x) { return x.s >= 2; })
      .sort(function (a, b) { return b.s - a.s; }).slice(0, 3).map(function (x) { return x.i; });
    var ids = hits.map(function (h) { return h.id; });
    var rest = INS.filter(function (i) { return ids.indexOf(i.id) === -1; });
    return { matches: hits, rest: rest };
  }

  function waLink(i) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Hi Dr. Rawal, I would like to get the ' + i.name + ' (' + rupees(i.price) + ').');
  }

  function card(i, highlight) {
    return '<article class="ins-card' + (highlight ? ' ins-card-hl' : '') + '">' +
      '<div class="ins-tag">' + esc(i.from) + ' &rarr; ' + esc(i.to) + '</div>' +
      '<h3>' + esc(i.name) + '</h3>' +
      '<p>' + esc(i.hook) + '</p>' +
      '<div class="ins-foot"><span class="ins-price">' + rupees(i.price) + '</span>' +
      '<a class="ins-btn" href="installations.html?id=' + encodeURIComponent(i.id) + '">Open Installation &rarr;</a></div>' +
      '</article>';
  }

  function detail(i) {
    return '<article class="ins-detail" id="ins-' + esc(i.id) + '">' +
      '<div class="ins-tag">' + esc(i.from) + ' &rarr; ' + esc(i.to) + '</div>' +
      '<h2>' + esc(i.name) + '</h2>' +
      '<p class="ins-detail-hook">' + esc(i.hook) + '</p>' +
      '<p>' + esc(i.desc) + '</p>' +
      '<ul>' + i.gets.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul>' +
      '<div class="ins-detail-buy"><span class="ins-price ins-price-lg">' + rupees(i.price) + '</span>' +
      '<a class="ins-btn ins-btn-gold" target="_blank" rel="noopener" href="' + waLink(i) + '">Get This Installation &rarr;</a></div>' +
      '</article>';
  }

  var CSS = '' +
    '.ins-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}' +
    '.ins-card{background:#fff;border:1px solid #e7e4f5;border-radius:16px;padding:20px;display:flex;flex-direction:column;box-shadow:0 6px 20px rgba(42,31,95,.07);transition:transform .2s,box-shadow .2s;font-family:"DM Sans",sans-serif;text-align:left}' +
    '.ins-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(42,31,95,.14)}' +
    '.ins-card-hl{border:2px solid #c9a84c;background:linear-gradient(180deg,#fffdf5,#fff)}' +
    '.ins-tag{display:inline-block;align-self:flex-start;font-size:11.5px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#4b2fb0;background:#efecfb;padding:4px 11px;border-radius:20px;margin-bottom:12px}' +
    '.ins-card h3{margin:0 0 8px;font-size:17px;font-weight:700;color:#1a1535;font-family:"DM Sans",sans-serif;line-height:1.3}' +
    '.ins-card p{margin:0 0 16px;font-size:13.5px;line-height:1.55;color:#4a4a68;flex:1}' +
    '.ins-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}' +
    '.ins-price{font-weight:700;font-size:17px;color:#1a1535}' +
    '.ins-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;background:linear-gradient(135deg,#4b2fb0,#2a1f5f);color:#fff!important;text-decoration:none;font-weight:700;font-size:13.5px;padding:10px 18px;border-radius:999px;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(75,47,176,.3);transition:transform .15s,box-shadow .15s;font-family:"DM Sans",sans-serif}' +
    '.ins-btn:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(75,47,176,.4)}' +
    '.ins-btn-gold{background:linear-gradient(135deg,#e3c676,#c9a84c);color:#1a1535!important;box-shadow:0 4px 12px rgba(201,168,76,.4);font-size:15px;padding:13px 26px}' +
    '.ins-detail{background:linear-gradient(135deg,#1a1535,#2a1f5f);color:#fff;border-radius:20px;padding:34px;font-family:"DM Sans",sans-serif;text-align:left;box-shadow:0 18px 50px rgba(26,21,53,.3)}' +
    '.ins-detail .ins-tag{background:rgba(255,255,255,.12);color:#e3c676}' +
    '.ins-detail h2{margin:0 0 8px;font-family:"Cormorant Garamond",serif;font-size:clamp(28px,4vw,40px);color:#fff}' +
    '.ins-detail p{color:rgba(255,255,255,.78);font-size:15px;line-height:1.65;margin:0 0 14px}' +
    '.ins-detail .ins-detail-hook{color:#e8c872;font-size:17px;font-style:italic}' +
    '.ins-detail ul{margin:0 0 22px;padding-left:20px;color:rgba(255,255,255,.85);font-size:14.5px;line-height:1.8}' +
    '.ins-detail-buy{display:flex;align-items:center;gap:20px;flex-wrap:wrap}' +
    '.ins-price-lg{font-size:30px;color:#e8c872;font-family:"Playfair Display",Georgia,serif}' +
    '@media(max-width:900px){.ins-grid{grid-template-columns:repeat(2,1fr)}}' +
    '@media(max-width:600px){.ins-grid{grid-template-columns:1fr}.ins-detail{padding:24px 20px}}';

  var st = document.createElement('style');
  st.textContent = CSS;
  document.head.appendChild(st);

  window.INSTALLATIONS = INS;
  window.InsLib = { search: search, card: card, detail: detail, esc: esc, rupees: rupees, price: PRICE };
})();
