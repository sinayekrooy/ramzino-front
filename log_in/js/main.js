$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 100,
        stagePadding:100,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        mergeFit:true,
        dotsEach:true,
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
                items: 1,                
            }
        }
    });

});
$(document).ready(function () {

   
    //scroll button
    $("header .header-scrolldown button").mouseover(function () {
        $(this).text("SCROLL DOWN");
        $(this).css({
            "color": "gray",
            "font-size": "11px"
        });
    })
    $("header .header-scrolldown button").mouseleave(function () {
        $(this).html('<i class="fas fa-angle-down"></i>');
    })

    //scroll it down 
    $(function () {
        $.scrollIt();
    });

})
