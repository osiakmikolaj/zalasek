(function () {
    // Aktualny rok w stopce
    var year = String(new Date().getFullYear());
    document.querySelectorAll(".js-year").forEach(function (el) {
        el.textContent = year;
    });

    // Facebook SDK wczytywany dopiero po kliknięciu (bez ciasteczek przed zgodą)
    function loadFacebookSdk() {
        if (window.FB && window.FB.XFBML) {
            window.FB.XFBML.parse();
            return;
        }
        if (document.getElementById("facebook-jssdk")) return;
        if (!document.getElementById("fb-root")) {
            var root = document.createElement("div");
            root.id = "fb-root";
            document.body.prepend(root);
        }
        var script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.src = "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v19.0";
        document.body.appendChild(script);
    }

    // Zamiana zaślepki na mapę Google / Facebooka po kliknięciu
    document.querySelectorAll(".js-load-embed").forEach(function (button) {
        button.addEventListener("click", function () {
            var holder = button.closest("[data-embed]");
            var template = document.getElementById(holder.dataset.template);
            if (!template) return;
            var kind = holder.dataset.embed;
            holder.replaceWith(template.content.cloneNode(true));
            if (kind === "facebook") loadFacebookSdk();
        });
    });
})();
