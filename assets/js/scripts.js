// swiper
var models = new Swiper(".models", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 29,
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
// var swiper = new Swiper(".smallImgs", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".gallery", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     },
// });