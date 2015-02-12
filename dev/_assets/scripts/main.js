var pageTransition = require('./components/pageTransition.js'),
    cards = document.getElementsByClassName('card'),
    i;

setTimeout(function() {
    'use strict';
    document.getElementsByTagName('main')[0].classList.remove('animate-in');
}, 300);

for (i = 0; i < cards.length; i +=1) {
    new pageTransition(cards.item(i));
}