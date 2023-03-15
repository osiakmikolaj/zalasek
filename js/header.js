const header = document.getElementById("header");
let prevScroll = window.scrollY;

window.onscroll = () => {
    let curScroll = window.scrollY;
    if (prevScroll > curScroll) {
        header.style.top = "0px";
    } else {
        header.style.top = "-130px";
    }
    prevScroll = curScroll;
};
