function toggleVisibility(element) {
    let sibling;

    // Check if the clicked element is a span within .item-container
    if (element.parentNode.classList.contains('item-container')) {
        // If so, get the next sibling UL of the parent DIV (.item-container)
        sibling = element.parentNode.nextElementSibling;
    } else {
        // Otherwise, proceed as before
        sibling = element.nextElementSibling;
    }
    
    if (sibling) {
        sibling.style.display = sibling.style.display === "none" ? "block" : "none";
    }
}

function selectItem(event, item, imageUrl) {
    event.stopPropagation(); // Stop the click event from bubbling up to the parent elements
    document.getElementById('selected-image').src = imageUrl;
}

document.addEventListener("DOMContentLoaded", function() {
    // Select spans that are direct children of .item-container, which are in turn direct children of li elements
    let containers = document.querySelectorAll('.directory-tree > li > .item-container > span');
    containers.forEach(container => {
        // We pass the span within .item-container to toggleVisibility
        toggleVisibility(container);
    });
});

