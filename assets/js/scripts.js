// aos
AOS.init();

// swiper
var models = new Swiper(".models", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var testimonials = new Swiper(".testimonials", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });