const header = document.getElementById("header");
const index = document.getElementById("index");
const offer = document.getElementById("offer");
const contact = document.getElementById("contact");

let prevScroll = window.scrollY;
let road = window.scrollY;

window.onscroll = () => {
    let curScroll = window.scrollY;
    road = curScroll;
    if (prevScroll > curScroll) header.style.top = "0px";
    if (road > 100) if (prevScroll < curScroll) header.style.top = "-100px";
    prevScroll = curScroll;
};

let currentPath = window.location.pathname;
console.log(currentPath);

if (currentPath == "/") {
    index.style.textDecoration = "rgba(87, 167, 115, 1) underline";
} else if (currentPath == "/pages/offer") {
    offer.style.textDecoration = "rgba(87, 167, 115, 1) underline";
} else if (currentPath == "/pages/contact") {
    contact.style.textDecoration = "rgba(87, 167, 115, 1) underline";
}
