// Remove jQuery slick slider code and replace hamburger menu toggle
// Add a class to body when JS is loaded
document.documentElement.classList.add('js-loaded');

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButtons = document.querySelectorAll('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Ensure mobile menu is hidden and checkbox is unchecked on page load
    mobileMenu.classList.remove('fade-in');
    hamburgerButtons.forEach(button => {
        button.checked = false;
        button.addEventListener('change', function() {
            mobileMenu.classList.toggle('fade-in');
        });
    });
});

//Animations//
const mainHeading = document.querySelectorAll(".animate-from-bottom")
const hero_l = document.querySelectorAll(".animate-in-left")
const hero_r = document.querySelectorAll(".animate-in-right")

const lines = document.querySelectorAll(".scroll-in-from-left")

const block_l = document.querySelectorAll(".scroll-in-left")
const block_r = document.querySelectorAll(".scroll-in-right")
const block_b = document.querySelectorAll(".scroll-in-from-bottom")


mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:0,
        duration:1.25,
    })
})

hero_l.forEach(object => {
    gsap.from(object, {
        x:-350,
        opacity:0,
        duration:1.25,
    })
})
hero_r.forEach(object => {
    gsap.from(object, {
        x:350,
        opacity:0,
        duration:1.25,
    })
})

block_b.forEach(object => {

    let tl = gsap.timeline({
    scrollTrigger: {
        trigger: object,
        start: "top-=450 center+=50",
        end: "center-=100 center",
        // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
        scrub: .5,
        // last but not least this helps us to visualize the script
        markers: false,
    }
    }).from(object,{
        y:150,
        opacity:0,
    })
});

block_l.forEach(object => {
    let tl = gsap.timeline({
    scrollTrigger: {
            trigger: object,
            start: "top-=50 center+=250",
            end: "center center",
            scrub: 1,
            markers: false,
        }
    }).from(object,{
        x:-150,
        opacity:0,
    })
});

block_r.forEach(object => {
    let tl = gsap.timeline({
    scrollTrigger: {
            trigger: object,
            start: "top-=50 center+=250",
            end: "center center",
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