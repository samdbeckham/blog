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
        self.animate();
    }
};

pageTransition.prototype.setTarget = function(href) {
    var self = this;
    target = href || self.el.href;

    return target;
}

pageTransition.prototype.animate = function() {
    var self = this,
        bounds = self.getBounds();
        tweens = self.getTweens(bounds);

    self.animateTo(tweens);

    // history.pushState({}, '', self.target);
}

pageTransition.prototype.getBounds = function() {
    var self = this,
        animation = {};

    animation.start = self.el.getBoundingClientRect();
    self.el.classList.add('fullscreen');

    animation.end = self.el.getBoundingClientRect();
    self.el.classList.remove('fullscreen');

    return animation;
}

pageTransition.prototype.getTweens = function(animation) {
    var properties = {};

    properties.translate = {},
    properties.scale = {};

    properties.translate.y = animation.end.top - animation.start.top + 'px';
    properties.translate.x = animation.end.left - animation.start.left + 'px';

    properties.scale.y = animation.end.height / animation.start.height;
    properties.scale.x = animation.end.width / animation.start.width;

    return properties;
}

pageTransition.prototype.animateTo = function(properties) {
    var self = this;

    self.el.classList.add('transitioning');
    transform = 'translate(' + properties.translate.x + ', ' + properties.translate.y + ')';
    transform += ' scale(' + properties.scale.x + ', ' + properties.scale.y + ')';

    self.el.style.transform = transform;
}

module.exports = pageTransition;