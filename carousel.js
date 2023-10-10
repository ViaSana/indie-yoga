// Get all carousel items
const items = document.querySelectorAll('.carousel-item'); 

// Track current item index
let current = 0;

// Scroll to item function
function scrollToItem(id) {


    // document.querySelector(id).scrollIntoView({behavior: 'smooth'});

    window.scrollTo(document.querySelector(id).offsetLeft, document.querySelector(id).offsetTop);
    console.log(id);
    console.log(document.querySelector(id).offsetLeft);
    console.log(document.querySelector(id).offsetTop);

}

// Next click handler
function goNext() {
    current++;
    
    if(current >= items.length) {
        current = 0;
    }

    const id = '#item' + (current + 1);
    
    scrollToItem(id); 
}

// Prev click handler 
function goPrev() {
    current--;
    
    if(current < 0) {
        current = items.length - 1;
    }

    const id = '#item' + (current + 1);

    scrollToItem(id);
}
