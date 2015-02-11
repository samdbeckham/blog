var extend = require ('../helpers/extend');

function pageTransition(el, options) {
    'use strict';
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
}

pageTransition.prototype.options = {};

pageTransition.prototype._init = function() {
    'use strict';
    var self = this;

    console.log(self);
};

module.exports = pageTransition;