if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/js/sw.js")
        .then()
        .catch((err) => console.log(err));
}
