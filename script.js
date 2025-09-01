// Scroll behavior for anchor links (smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toggle navbar untuk mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    toggleBtn.classList.toggle("active");
  });

  // Tutup menu saat salah satu link diklik
  const links = navLinks.querySelectorAll("a, button");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      toggleBtn.classList.remove("active");
    });
  });
});

// Replace placeholders for dynamic avatars or ratings (if needed)
document.querySelectorAll(".avatar").forEach((el, index) => {
  el.style.zIndex = 10 - index;
});

// Carousel Mentor
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const container = document.querySelector(".carousel-container");
  const leftButton = document.querySelector(".carousel-button.left");
  const rightButton = document.querySelector(".carousel-button.right");
  const cards = document.querySelectorAll(".instructor-card");

  let currentIndex = 0; // simpan index aktif

  function getCardPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1023) return 3;
    return 4;
  }

  function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 16; // +gap
    const translateX = -(currentIndex * cardWidth);
    track.style.transform = `translateX(${translateX}px)`;
  }

  rightButton.addEventListener("click", () => {
    const cardPerView = getCardPerView();
    const maxIndex = cards.length - cardPerView;

    if (currentIndex < maxIndex) {
      currentIndex += cardPerView; // geser per layar
      if (currentIndex > maxIndex) currentIndex = maxIndex; // jangan lewat
      updateSlide();
    }
  });

  leftButton.addEventListener("click", () => {
    const cardPerView = getCardPerView();
    if (currentIndex > 0) {
      currentIndex -= cardPerView; // geser per layar
      if (currentIndex < 0) currentIndex = 0;
      updateSlide();
    }
  });

  window.addEventListener("resize", () => {
    updateSlide(); // biar posisi tetap pas resize
  });
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
