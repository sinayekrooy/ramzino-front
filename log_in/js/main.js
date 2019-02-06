$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 10,
        loop: true,
        margin: 90,
        stagePadding:60,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 50,
                stagePadding: 50,
                nav: false,
            },
            768: {
                items: 2,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 5,
                center: true

            }
        }
    });

});