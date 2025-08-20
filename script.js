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
  const leftButton = document.querySelectorAll(".carousel-button.left")[0];
  const rightButton = document.querySelector(".carousel-button.right");

  let currentPosition = 0;

  function getCardPerView() {
    return window.innerWidth <= 768 ? 2 : 4;
  }

  function getCardWidth() {
    const card = document.querySelector(".instructor-card");
    const style = window.getComputedStyle(card);
    const width = card.offsetWidth;
    const marginRight = parseFloat(style.marginRight || 0);
    return width + marginRight + 20; // 20px gap antar kartu
  }

  function scrollTrack(direction) {
    const cardPerView = getCardPerView();
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth * cardPerView;

    const maxScroll = -(track.scrollWidth - container.offsetWidth);

    if (direction === "left") {
      currentPosition = Math.min(currentPosition + scrollAmount, 0);
    } else {
      currentPosition = Math.max(currentPosition - scrollAmount, maxScroll);
    }

    track.style.transform = `translateX(${currentPosition}px)`;
  }

  leftButton.addEventListener("click", () => scrollTrack("left"));
  rightButton.addEventListener("click", () => scrollTrack("right"));

  // Reset posisi saat resize untuk mencegah layout rusak
  window.addEventListener("resize", () => {
    currentPosition = 0;
    track.style.transform = `translateX(0px)`;
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
