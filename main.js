$(".testimonial-slider-container").slick({
    autoplay: true,
    autoplaySpeed: 2e4,
    speed: 600,
    arrows: true,
    accessibility: true,
    dots: true,
    fade: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});

// Hamburger Menu
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

 /* curator-feed-default-feed-layout */
(function(){
    var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
    i.src="https://cdn.curator.io/published/108f7c79-8ffc-467c-a1bf-37780a6a341e.js";
    e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();

// WALLA WIDGET Function
(function (w, a, l, la, j, s) {
    const t = a.getElementById('walla-widget-script')
    if (t) return;
    j = a.createElement(l);
    j.async = 1;
    j.src = la;
    j.id = 'walla-widget-script';
    s = a.getElementsByTagName(l)[0];
    s.parentNode.insertBefore(j, s);
})(window, document, 'script', 'https://widget.hellowalla.com/loader/v1/walla-widget-loader.js');