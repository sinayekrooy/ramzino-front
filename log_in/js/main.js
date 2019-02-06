$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        navContainer : true ,
        center : true ,
        margin: 10,
        stagePadding:10,
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
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 2,
                center: true ,
            }
        }
    });

});