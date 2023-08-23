// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// eslint-disable-next-line no-undef
let swiperCoaches = new Swiper('.mySwiper-coaches', {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// eslint-disable-next-line no-undef
let swiperReviews = new Swiper('.mySwiper-reviews', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiperCoaches();
swiperReviews();
