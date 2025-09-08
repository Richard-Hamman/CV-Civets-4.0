document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (typeof gtag_report_conversion === "function") {
        gtag_report_conversion(this);
      } else {
        // fallback if gtag_report_conversion is not defined
        this.submit();
      }
    });
  }
});