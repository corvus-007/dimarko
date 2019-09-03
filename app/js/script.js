'use strict';

svg4everybody();
floatLabel.init();

tippy('[data-tippy-content]');

$.fancybox.defaults.animationEffect = 'zoom-in-out';
$.fancybox.defaults.preventCaptionOverlap = false;

$('input[type="tel"]').inputmask({
  mask: '+7 (999) 999-99-99'
});

const welcomeCarousel = new Swiper('[data-welcome-carousel]', {
  // Optional parameters
  speed: 800,
  loop: true,
  parallax: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.welcome-carousel-navigation__counter',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.welcome-carousel-navigation__button--next',
    prevEl: '.welcome-carousel-navigation__button--prev'
  }
});

const galleryCarousel = new Swiper('[data-gallery-carousel]', {
  // Optional parameters
  slidesPerView: 2,
  speed: 800,
  loop: true,
  lazy: true,
  grabCursor: true,
  watchSlidesVisibility: true,
  centeredSlides: true,
  breakpoints: {
    667: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4,
      centeredSlides: false
    }
  },
  breakpointsInverse: true,

  // If we need pagination
  pagination: {
    el: '.gallery-carousel-navigation__counter',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery-carousel-navigation__button--next',
    prevEl: '.gallery-carousel-navigation__button--prev'
  }
});


