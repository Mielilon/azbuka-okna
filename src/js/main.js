//= jquery.min.js
//= owl.carousel.js
var owl = $(".owl-carousel");

owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    },
});