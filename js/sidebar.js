const sideNav = document.querySelector(".side-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

function openNav() {
    sideNav.style.width = "250px";
    menuBtn.style.opacity = "0";
}

function closeNav() {
    sideNav.style.width = "0";
    menuBtn.style.opacity = "1";
}

menuBtn.addEventListener("click", () => {
    openNav();
});
closeBtn.addEventListener("click", () => {
    closeNav();
});
