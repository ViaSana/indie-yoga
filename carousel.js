// Get all carousel items
const items = document.querySelectorAll('.carousel-item'); 

// Track current item index
let current = 1;

// Function that jumps to the hash item and then removes from URL
function jump(h){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+h;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

// Next click handler
function goNext() {
    current++;
    current++;

    if(current >= items.length) {
        current = 0 ;
    }

    const id = 'item' + (current + 1);
    
    jump(id); 
}

// Prev click handler 
function goPrev() {
    current--;
    current--;

    if(current < 0) {
        current = items.length - 1;
    }

    const id = 'item' + (current + 1);

    // scrollToItem(id);
    jump(id);
}