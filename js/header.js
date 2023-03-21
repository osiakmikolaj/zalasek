const header = document.getElementById("header");
// porzedni scroll jest równy akutalnemu położeniu strony
let prevScroll = window.scrollY;
let road = window.scrollY;
// na event scrolowania
window.onscroll = () => {
    let curScroll = window.scrollY;
    road = curScroll;
    if (prevScroll > curScroll) header.style.top = "0px";
    if (road > 100) if (prevScroll < curScroll) header.style.top = "-130px";
    prevScroll = curScroll;
};
