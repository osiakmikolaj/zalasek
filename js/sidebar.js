const sideNav = document.querySelector("#side-nav");
const sideNavItems = document.querySelectorAll(".side-nav_item");
const imgSlideBtn = document.querySelector(".next");

function openNav() {
    sideNav.style.width = "250px";
    menuBtn.style.opacity = "0";
    for (let e of sideNavItems) {
        e.style.display = "block";
    }
    imgSlideBtn.style.opacity = "0";
}

function closeNav() {
    sideNav.style.width = "0";
    menuBtn.style.opacity = "1";
    for (let e of sideNavItems) {
        e.style.display = "none";
    }
    imgSlideBtn.style.opacity = "1";
}
