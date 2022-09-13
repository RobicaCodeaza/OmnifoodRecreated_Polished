var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
    1366: { slidesPerView: 4 },
  },
});

const signUpButton = document.querySelector(".btn--form-cover-account");
const signInButton = document.querySelector(".btn--form-cover-sign");
const container = document.querySelector(".container--form");

signUpButton.addEventListener("click", () => {
  container.classList.add("coverall");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("coverall");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear + 4;

// Implementing smooth scrolling

// const scroll = new SmoothScroll('a[href*="#"]', { speed: 100 });

$(".smooth-scroll").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault;
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000
    );
  }
});
