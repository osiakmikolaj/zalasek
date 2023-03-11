const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    openNav();
});
closeBtn.addEventListener("click", () => {
    closeNav();
});

window.onload = () => bookingResize();
window.onresize = () => bookingResize();

function bookingResize() {
    const bookingItem = document.querySelector(".navbar_item-booking");
    const bookingText = document.querySelector("#booking");
    const bookingTextDot = document.querySelector("#bDot");
    if (window.innerWidth <= 1200) {
        bookingItem.style.margin = 0;
        bookingItem.style.padding = "3px 10px";
        bookingItem.style.borderRadius = "10px";
        if (bookingText != null) {
            bookingText.innerHTML = "B";
            bookingTextDot.innerHTML = ".";
        }
    } else if (window.innerWidth > 1200) {
        bookingText.innerHTML = "Booking";
        bookingTextDot.innerHTML = ".com";
    }
}
