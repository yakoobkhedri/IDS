// mobile menu

let hamIcon = document.getElementById('hamIcon');
let menu = document.getElementById('menu');
let closemenu = document.getElementById('closemenu');
let overlay = document.getElementById('overlay');

hamIcon.addEventListener('click', function () {
    menu.classList.add('active');
    overlay.classList.add('active');
})
closemenu.addEventListener('click', function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click', function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})

// swiper
var banner = new Swiper(".banner", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var models = new Swiper(".models", {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
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

//  product slider

let smallImg=Array.from(document.getElementsByClassName('smallImgs'));
let bigImg=document.getElementById('bigImg');

smallImg.forEach((item)=>{
    item.addEventListener('click',function () {
        let imgSrc=item.querySelector('img').src;
        bigImg.src=imgSrc;
    })
})