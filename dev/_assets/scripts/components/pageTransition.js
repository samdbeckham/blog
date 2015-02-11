var extend = require ('../helpers/extend');

function pageTransition(el, options) {
    'use strict';
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
}

pageTransition.prototype.options = {
    // default options go here
};

pageTransition.prototype._init = function() {
    'use strict';
    var self = this;

    self.target = self.setTarget();

    self.el.onclick = function(e) {
        e.preventDefault();
        self.beginTransition();
    }
};

pageTransition.prototype.setTarget = function(href) {
    var self = this;
    target = href || self.el.href;

    return target;
}

pageTransition.prototype.beginTransition = function() {
    var self = this;

    self.getAnimationBounds();
    self.calculateAnimation();

    console.log(self.animation);

    // history.pushState({}, '', self.target);
}

pageTransition.prototype.getAnimationBounds = function() {
    var self = this;
    self.animation = {};

    self.animation.start = self.el.getBoundingClientRect();
    self.el.classList.add('fullscreen');

    self.animation.end = self.el.getBoundingClientRect();
    self.el.classList.remove('fullscreen');
}

pageTransition.prototype.calculateAnimation = function() {
    var self = this,
        properties = {};

    properties.translate = {},
    properties.scale = {};

    properties.translate.y = self.animation.end.top - self.animation.start.top + 'px';
    properties.translate.x = self.animation.end.left - self.animation.start.left + 'px';


    transform = 'translate(' + properties.translate.x + ', ' + properties.translate.y + ')';

    self.el.style.transform = transform;
}

module.exports = pageTransition;