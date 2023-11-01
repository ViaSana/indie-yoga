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
});

//Animations//
const mainHeading = document.querySelectorAll(".animate-from-bottom")
const headings = document.querySelectorAll(".scroll-in-from-bottom")
const offerings = document.querySelectorAll(".scroll-in-from-right")
const lines = document.querySelectorAll(".scroll-in-from-left")


// Animates in from the bottom on page load
mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:0,
        duration:1.25,
    })
})

headings.forEach(object => {

    let tl = gsap.timeline({
    scrollTrigger: {
        trigger: object,
        start: "top-=210 center+=50",
        end: "center-=75 center+=50",
        // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
        scrub: .5,
        // last but not least this helps us to visualize the script
        markers: false,
    }
    }).from(object,{
        y:250,
        opacity:0,
    })
});

offerings.forEach(object => {
    let tl = gsap.timeline({
    scrollTrigger: {
            trigger: object,
            start: "clamp(top center+=50)",
            end: "clamp(center center)",
            scrub: 1,
            markers: false,
        }
    }).from(object,{
        x:150,
        opacity:0,
    })
});

lines.forEach(object => {
    let tl = gsap.timeline({
    scrollTrigger: {
            trigger: object,
            start: "clamp(top center+=50)",
            end: "clamp(center center)",
            scrub: 1,
            markers: false,
        }
    }).from(object,{
        x:-250,
        opacity:0,
    })
});