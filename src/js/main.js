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



var owlWithArrows = $(".owl-carousel_with-arrows");

owlWithArrows.owlCarousel({
    loop: true,
    nav: true,
    navText: ['',''],
    margin: 16,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1200: {
            items: 5,
        },
    },
});
