document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // FAQ accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (q) {
    q.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('open');
    });
  });

  // Testimonial slider
  const dots = document.querySelectorAll('.slider-dot');
  const cards = document.querySelectorAll('.testimonial-card');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    cards.forEach(function (c) { c.classList.remove('active'); });
    dots.forEach(function (d) { d.classList.remove('active'); });
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function startSlider() {
    slideInterval = setInterval(function () {
      var next = (currentSlide + 1) % cards.length;
      showSlide(next);
    }, 5000);
  }

  if (dots.length > 0 && cards.length > 0) {
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        clearInterval(slideInterval);
        showSlide(parseInt(this.getAttribute('data-slide')));
        startSlider();
      });
    });
    showSlide(0);
    startSlider();
  }
});
