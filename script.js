document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.getElementById('siteNav');
  var contactForm = document.getElementById('contactForm');
  var formNotice = document.getElementById('formNotice');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
    });
  }

  if (contactForm && formNotice) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      formNotice.textContent = '문의 내용이 성공적으로 전송되었습니다. 감사합니다!';
      contactForm.reset();
    });
  }
});
