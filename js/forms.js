/* =======================================================
 *  The Bread Box — email forms
 *
 *  The contact form and the reservation form send their
 *  contents to your inbox through Formspree (free plan:
 *  50 submissions a month, no server needed).
 *
 *  SETUP (one time, about 2 minutes):
 *   1. Sign up at https://formspree.io with the email address
 *      where you want to receive messages.
 *   2. Click "New form", give it a name (e.g. "Bread Box website").
 *   3. Copy the form endpoint. It looks like
 *          https://formspree.io/f/abcdwxyz
 *   4. Paste it below in place of YOUR_FORM_ID's full URL.
 *   5. Upload the site, send yourself a test message, and click
 *      the confirmation link Formspree emails you (first time only).
 *
 *  You can use one endpoint for both forms (the email subject
 *  tells you which form it came from) or create two forms.
 * ======================================================= */
var BREADBOX_FORMS = {
  contact:     "https://formspree.io/f/xaeelnee",
  reservation: "https://formspree.io/f/xaeelnee"
};

(function () {
  'use strict';

  function show(box, kind, text) {
    box.className = 'form-status ' + kind;
    box.textContent = text;
  }

  document.querySelectorAll('form[data-breadbox-form]').forEach(function (form) {
    var key = form.getAttribute('data-breadbox-form');
    var box = form.querySelector('.form-status');
    var btn = form.querySelector('[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = BREADBOX_FORMS[key];

      if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
        show(box, 'err', 'This form is not connected yet. Add your Formspree link in js/forms.js (see the notes at the top of that file).');
        return;
      }
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var label = btn.value;
      btn.disabled = true;
      btn.value = 'Sending…';

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          show(box, 'ok', form.getAttribute('data-success') || 'Thank you! Your message is on its way to us.');
        } else {
          return res.json().then(function (data) {
            var msg = (data && data.errors) ? data.errors.map(function (x) { return x.message; }).join(', ') : '';
            show(box, 'err', 'Sorry, that did not send. ' + (msg || 'Please try again, or call us.'));
          });
        }
      }).catch(function () {
        show(box, 'err', 'Sorry, we could not reach the server. Please check your connection and try again.');
      }).then(function () {
        btn.disabled = false;
        btn.value = label;
      });
    });
  });
})();
