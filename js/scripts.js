var Menu = Menu || {
    init: function () {
        Menu.listeners()
    },
    listeners: function () {
        $("header.main").on("click", ".open-menu", function (a) {
            a.preventDefault();
            Menu.open(this)
        }).on("click", ".close-menu", function (a) {
            a.preventDefault();
            Menu.close(this)
        })
    },
    open: function (a) {
        $("body").addClass("menu-open");
        $(a).text("Close").attr("class", "close-menu")
    },
    close: function (a) {
        $("body").removeClass("menu-open");
        $(a).text("Menu").attr("class", "open-menu")
    }
};
Menu.init();

(function(){
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
        var height = $(window).height() * 0.618033;
        $('#hero').css('min-height', height);
    }
})();
