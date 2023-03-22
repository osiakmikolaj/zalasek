const header = document.getElementById("header");

let prevScroll = window.scrollY;
let road = window.scrollY;

window.onscroll = () => {
    let curScroll = window.scrollY;
    road = curScroll;
    if (prevScroll > curScroll) header.style.top = "0px";
    if (road > 100) if (prevScroll < curScroll) header.style.top = "-100px";
    prevScroll = curScroll;
};
