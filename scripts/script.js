(function() {
    var menu = document.getElementsByClassName("burger-menu")[0];
    var sideMenu = document.getElementsByClassName("side-menu")[0];
    var clicked = false;

    menu.onclick = function() {
        if (!clicked) {
            TweenMax.to(".bar-mid", 0.5, { x: 100, ease: Power4.easeOut })
            TweenMax.to(".bar-top", 0.5, { rotation: "+=45", y: 11, ease: Power4.easeOut })
            TweenMax.to(".bar-bottom", 0.5, { rotation: "-=45", y: -11, ease: Power4.easeOut })
            TweenMax.to(".side-menu", 1, { x: -300, ease: Power4.easeOut });
            clicked = true;
        } else {
            TweenMax.to(".bar-mid", 0.5, { x: 0, ease: Power4.easeOut })
            TweenMax.to(".bar-top", 0.5, { rotation: 0, y: 0, ease: Power4.easeOut })
            TweenMax.to(".bar-bottom", 0.5, { rotation: 0, y: 0, ease: Power4.easeOut });
            TweenMax.to(".side-menu", 1, { x: 300, ease: Power4.easeOut });
            clicked = false;
        };
    };

})();

(function() {
    var search_icon = document.getElementsByClassName("search")[0];
    var clicked = false;
    search_icon.onclick = function() {
        if (!clicked) {
            TweenMax.to(".search_bar_main input", 0.750, { css: { right: "0px" }, ease: Power4.easeOut });
            TweenMax.to(".nav-link", 0.750, { opacity: 0, ease: Power4.easeOut });
            clicked = true;
        } else {
            TweenMax.to(".search_bar_main input", 0.750, { css: { right: "-100%" }, ease: Power4.easeOut });
            TweenMax.to(".nav-link", 0.750, { opacity: 1, ease: Power4.easeOut });
            clicked = false;
        }
    }

})();