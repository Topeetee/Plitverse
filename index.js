// Mobile Navigation Toggle for Plitverse (Slide from LEFT)
// --------------------------------------------------

const menuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('mobile-menu-close');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    console.log("hambuger clicked");
    mobileMenu.classList.remove('-translate-x-full');
  });
}

if (closeButton && mobileMenu) {
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
}

// Close menu when clicking any link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
});


// JOB SLIDER
const slider = document.getElementById("job-slider");
const nextBtn = document.getElementById("job-next");
const prevBtn = document.getElementById("job-prev");

function getScrollAmount() {
  if (window.innerWidth >= 1024) return slider.clientWidth / 3;
  if (window.innerWidth >= 768) return slider.clientWidth / 2;
  return slider.clientWidth;
}

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});
