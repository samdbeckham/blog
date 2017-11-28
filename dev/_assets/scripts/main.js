var pageTransition = require("./components/pageTransition.js"),
  imageFixer = require("./components/imageFixer"),
  fitvids = require("fitvids"),
  cards = document.getElementsByClassName("card"),
  images = document.getElementsByTagName("img"),
  i;

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/serviceWorker.js", {
    scope: "/"
  });
}

setTimeout(function() {
  "use strict";
  document.getElementsByTagName("main")[0].classList.remove("animate-in");
}, 300);

for (i = 0; i < cards.length; i += 1) {
  new pageTransition(cards.item(i));
}

for (i = 0; i < images.length; i += 1) {
  new imageFixer(images.item(i));
}

fitvids();

window.onpageshow = function(event) {
  if (event.persisted) {
    var activeCard = document.querySelector(".card.transitioning");
    var background = activeCard.style.background;

    activeCard.removeAttribute("style");
    activeCard.classList.remove("transitioning");
    activeCard.style.background = background;
  }
};
