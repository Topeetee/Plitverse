document.addEventListener("DOMContentLoaded", () => {

  // --- 1. MOBILE MENU LOGIC ---
 const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('mobile-menu-close');

menuBtn.onclick = () => {
  mobileMenu.style.visibility = 'visible';
  mobileMenu.style.pointerEvents = 'auto'; // This enables clicking
  mobileMenu.classList.remove('-translate-x-full');
};

closeBtn.onclick = () => {
  mobileMenu.classList.add('-translate-x-full');
  mobileMenu.style.pointerEvents = 'none'; // This prevents clicking while hidden
  setTimeout(() => {
    mobileMenu.style.visibility = 'hidden';
  }, 300);
};

  // --- 2. JOB SLIDER LOGIC (For your index.html) ---
  const jobSlider = document.getElementById("job-slider");
  const jobNext = document.getElementById("job-next");
  const jobPrev = document.getElementById("job-prev");

  if (jobSlider && jobNext && jobPrev) {
    // Logic to calculate how much to scroll based on screen size
    const getJobScrollAmount = () => {
      if (window.innerWidth >= 1024) return jobSlider.clientWidth / 3;
      if (window.innerWidth >= 768) return jobSlider.clientWidth / 2;
      return jobSlider.clientWidth;
    };

    jobNext.onclick = () => {
      jobSlider.scrollBy({ left: getJobScrollAmount(), behavior: "smooth" });
    };

    jobPrev.onclick = () => {
      jobSlider.scrollBy({ left: -getJobScrollAmount(), behavior: "smooth" });
    };
  }

  // --- 3. SERVICES SLIDER LOGIC (For your services.html) ---
  const servSlider = document.getElementById("services-slider");
  const servNext = document.getElementById("services-next");
  const servPrev = document.getElementById("services-prev");

  if (servSlider && servNext && servPrev) {
    const servScrollAmount = 344; // Card width + gap

    servNext.onclick = () => {
      servSlider.scrollBy({ left: servScrollAmount, behavior: "smooth" });
    };

    servPrev.onclick = () => {
      servSlider.scrollBy({ left: -servScrollAmount, behavior: "smooth" });
    };
  }
});