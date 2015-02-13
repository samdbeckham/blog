var extend = require ('../helpers/extend');

function imageFixer(el, options) {
    'use strict';
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
}

imageFixer.prototype.options = {
    // default options go here
};

imageFixer.prototype._init = function() {
    'use strict';

    this.setAltCaption();
};

imageFixer.prototype.setAltCaption = function() {
    'use strict';
    var figure = document.createElement('figure'),
        caption = document.createElement('figcaption');

    caption.innerHTML = this.el.alt;

    this.el.parentNode.replaceChild(figure, this.el);

    figure.appendChild(this.el);
    figure.appendChild(caption);
};

module.exports = imageFixer;