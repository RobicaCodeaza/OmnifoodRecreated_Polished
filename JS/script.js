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
    575: { slidesPerView: 2 },
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

// Trying to implement the sticky bar navigation

// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.onscroll = function () {
//   myFunction();
// };

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log(ent);
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      console.log(ent);
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
  // breakpoints: {
  //   0:{rootMargin:"-80px"},
  //   768:{
  //     rootMargin:"0px"
  //   },
  // },
);
obs.observe(sectionHeroEl);

// Implementing main nav button

headerEl = document.querySelector(".header");
btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-active");
});
