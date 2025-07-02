window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QGKLBTG66P');
gtag('config', 'AW-787499636');
gtag('config', 'AW-787499636/NcY0CMyHwNIaEPSUwfcC', { 'phone_conversion_number': '0633138880' });

// Conversion event function
window.gtag_report_conversion = function(form) {
  var callback = function () {
    if (form) form.submit(); // Submit the form first
    setTimeout(function() {
      window.location = 'thank-you.html';
      setTimeout(function() {
        window.location = 'index.html';
      }, 10000);
    }, 300); // Wait 300ms before redirecting to thank-you.html
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-787499636/6M_YCP77y9IaEPSUwfcC',
    'value': 1.0,
    'currency': 'ZAR',
    'event_callback': callback
  });
  return false;
};