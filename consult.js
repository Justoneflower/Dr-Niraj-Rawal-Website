/* consult.js
   "Book Consultation" opens a one-on-one meeting booking with Dr. Niraj Rawal (Rs 199, Razorpay).
   Must load AFTER the main inline script in index.html (uses RAZORPAY_KEY_ID and Razorpay). */
document.addEventListener("DOMContentLoaded", function () {
  var FEE_PAISE = 19900;
  var WA_NUMBER = '919352080871';

  var css = document.createElement('style');
  css.textContent =
    "#consultOverlay{display:none;position:fixed;inset:0;background:rgba(10,8,30,.85);z-index:10000;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);font-family:'DM Sans',sans-serif;}" +
    "#consultOverlay.open{display:flex;}" +
    "#consultOverlay .wm-box{max-width:460px;background:#fff;max-height:92vh;overflow-y:auto;}" +
    ".cs-price{display:flex;align-items:baseline;gap:8px;margin-top:12px;}" +
    ".cs-price b{font-family:'Playfair Display',serif;font-size:30px;color:#e8c96a;}" +
    ".cs-price span{color:rgba(255,255,255,.55);font-size:13px;}" +
    ".wm-field textarea{width:100%;padding:12px 14px;border:1.5px solid #e0dff5;border-radius:10px;font-size:15px;font-family:'DM Sans',sans-serif;outline:none;box-sizing:border-box;color:#1a1a2e;resize:vertical;min-height:70px;}" +
    ".wm-field textarea:focus{border-color:#a89fd8;}" +
    ".cs-success{display:none;padding:40px 28px;text-align:center;}" +
    ".cs-success.show{display:block;}" +
    ".cs-success .cs-tick{width:60px;height:60px;border-radius:50%;background:#2ecc71;color:#fff;font-size:28px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;}" +
    ".cs-success h3{font-family:'Playfair Display',serif;color:#1a1535;font-size:22px;margin:0 0 8px;}" +
    ".cs-success p{color:#6a6a88;font-size:14px;line-height:1.6;margin:0 0 20px;}" +
    ".cs-success a{display:inline-block;background:#2ecc71;color:#fff;text-decoration:none;padding:13px 26px;border-radius:30px;font-weight:700;font-size:14px;}";
  document.head.appendChild(css);

  var wrap = document.createElement('div');
  wrap.id = 'consultOverlay';
  wrap.innerHTML =
    '<div class="wm-box">' +
      '<div id="csFormStage">' +
        '<div class="wm-form-head">' +
          '<button class="wm-close" id="csClose">✕</button>' +
          '<div class="wm-badge-pill">One-on-One</div>' +
          '<h2>Book a One-on-One Meeting<br>with Dr. Niraj Rawal</h2>' +
          '<p>A private, personal session focused entirely on your situation.</p>' +
          '<div class="cs-price"><b>₹199</b><span>one-time session fee</span></div>' +
        '</div>' +
        '<div class="wm-form-body">' +
          '<div class="wm-field"><label>Full Name *</label><input type="text" id="csName" placeholder="Your name" autocomplete="name"/><div class="wm-err-msg" id="csNameErr">Please enter your name</div></div>' +
          '<div class="wm-field"><label>Email Address *</label><input type="email" id="csEmail" placeholder="you@email.com" autocomplete="email"/><div class="wm-err-msg" id="csEmailErr">Please enter a valid email address</div></div>' +
          '<div class="wm-field"><label>WhatsApp Number *</label><input type="tel" id="csPhone" placeholder="+91 98765 43210" autocomplete="tel"/><div class="wm-err-msg" id="csPhoneErr">Please enter a valid phone number</div></div>' +
          '<div class="wm-field"><label>What would you like to discuss? <span>(optional)</span></label><textarea id="csTopic" placeholder="Briefly tell us what you are going through"></textarea></div>' +
          '<button class="wm-submit-btn" id="csPayBtn">Pay ₹199 &amp; Book Meeting →</button>' +
          '<p class="wm-privacy">🔒 Secure payment via Razorpay. Your details are safe.</p>' +
        '</div>' +
      '</div>' +
      '<div class="cs-success" id="csSuccess">' +
        '<div class="cs-tick">✓</div>' +
        '<h3>Payment Received!</h3>' +
        '<p>Your one-on-one meeting request is confirmed. Tap below to message us on WhatsApp and choose your meeting time with Dr. Rawal.</p>' +
        '<a href="#" id="csWaLink" target="_blank" rel="noopener">Schedule on WhatsApp →</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wrap);

  var ov = wrap;
  var payBtn = document.getElementById('csPayBtn');

  function openC()  { ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeC() { ov.classList.remove('open'); document.body.style.overflow = ''; }

  /* Every "Book Consultation" link opens the modal */
  document.querySelectorAll('a').forEach(function (a) {
    if (/book consultation/i.test(a.textContent)) {
      a.addEventListener('click', function (e) { e.preventDefault(); openC(); });
    }
  });
  document.getElementById('csClose').addEventListener('click', closeC);
  ov.addEventListener('click', function (e) { if (e.target === ov) closeC(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeC(); });

  function flag(id, errId, bad) {
    document.getElementById(id).classList.toggle('wm-err', bad);
    document.getElementById(errId).classList.toggle('show', bad);
  }

  payBtn.addEventListener('click', function () {
    var name  = document.getElementById('csName').value.trim();
    var email = document.getElementById('csEmail').value.trim();
    var phone = document.getElementById('csPhone').value.trim();
    var topic = document.getElementById('csTopic').value.trim();

    var badName  = !name;
    var badEmail = !email || !/\S+@\S+\.\S+/.test(email);
    var badPhone = !phone || !/^\+?[\d\s\-]{8,15}$/.test(phone);
    flag('csName', 'csNameErr', badName);
    flag('csEmail', 'csEmailErr', badEmail);
    flag('csPhone', 'csPhoneErr', badPhone);
    if (badName || badEmail || badPhone) return;

    if (typeof Razorpay === 'undefined') {
      alert('Payment could not load. Please check your internet connection and try again.');
      return;
    }

    var label = payBtn.textContent;
    payBtn.disabled = true;
    payBtn.textContent = 'Opening payment…';

    var rzp = new Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: FEE_PAISE,
      currency: 'INR',
      name: 'Dr. Niraj Rawal',
      description: 'One-on-One Meeting with Dr. Niraj Rawal (₹199)',
      prefill: { name: name, email: email, contact: phone },
      theme: { color: '#a89fd8' },
      handler: function (resp) {
        var msg = 'Hello Dr. Rawal, I have paid Rs.199 for a one-on-one meeting.' +
                  '\nName: ' + name +
                  '\nPhone: ' + phone +
                  (topic ? '\nTopic: ' + topic : '') +
                  '\nPayment ID: ' + (resp.razorpay_payment_id || '');
        document.getElementById('csWaLink').href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
        document.getElementById('csFormStage').style.display = 'none';
        document.getElementById('csSuccess').classList.add('show');
        payBtn.disabled = false;
        payBtn.textContent = label;
      },
      modal: { ondismiss: function () { payBtn.disabled = false; payBtn.textContent = label; } }
    });
    rzp.on('payment.failed', function (r) {
      payBtn.disabled = false;
      payBtn.textContent = label;
      alert('Payment failed: ' + (r.error && r.error.description ? r.error.description : 'please try again.'));
    });
    rzp.open();
  });
});
