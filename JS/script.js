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
