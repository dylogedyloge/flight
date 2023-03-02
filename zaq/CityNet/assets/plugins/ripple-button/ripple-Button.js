// Codes By Mahdi Tasha
// Variables
const allRippleButtons = document.querySelectorAll('.ripple-button');

// Adding Event Listener Of Click On Mouse On Each Ripple Button That Creates Span Element.
// Then Assigns Class Name To Created Span And Sets Top And Left Positions Of It Based On Clicked Position
// After That Appends It To Clicked Button And Listens To AnimationEnd Event On Created Span Which Removes It
allRippleButtons.forEach(item => {
    item.addEventListener('mousedown', (event) => {
        const innerSpan = document.createElement("span");

        innerSpan.className = "ripple-button--inner-span";
        innerSpan.style.left = `calc(${event.offsetX}px - 50%)`
        innerSpan.style.top = `calc(${event.offsetY}px - 50%)`
        innerSpan.style.width = `calc(${item.getBoundingClientRect().width}px - 0px)`

        item.appendChild(innerSpan);

        innerSpan.addEventListener('animationend', () => innerSpan.remove());
    })
})