if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/js/sw.js")
        .then((reg) => console.log(reg))
        .catch((err) => console.log(err));
}
