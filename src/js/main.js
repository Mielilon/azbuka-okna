//= jquery.min.js
//= owl.carousel.js
var owlWelcome = $(".owl-carousel_welcome");

owlWelcome.owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    },
});



var owlFourItems = $(".owl-carousel_4-items");

owlFourItems.owlCarousel({
    loop: false,
    nav: true,
    navText: ['',''],
    margin: 16,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});

var owlFiveItems = $(".owl-carousel_5-items");

owlFiveItems.owlCarousel({
    loop: false,
    nav: true,
    navText: ['',''],
    margin: 16,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
        1400: {
            items: 5,
        },
    },
});
