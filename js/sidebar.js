const sideNav = document.querySelector(".side-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".side-nav_overlay");

function openNav() {
    overlay.classList.remove("fadeout");
    overlay.classList.add("fadein");
    sideNav.style.width = "250px";
    menuBtn.style.opacity = "0";
    overlay.style.display = "block";
}

function closeNav() {
    overlay.classList.remove("fadein");
    overlay.classList.add("fadeout");
    sideNav.style.width = "0";
    menuBtn.style.opacity = "1";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}

overlay.addEventListener("click", () => {
    closeNav();
});

menuBtn.addEventListener("click", () => {
    openNav();
});

closeBtn.addEventListener("click", () => {
    closeNav();
});
