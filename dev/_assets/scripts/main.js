var pageTransition = require('./components/pageTransition.js');

setTimeout(function() {
    document.getElementsByTagName('main')[0].classList.remove('animate-in');
}, 300);

new pageTransition(document.getElementsByClassName('card')[0]);