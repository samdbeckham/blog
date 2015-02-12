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

    self.el.onclick = function(e) {
        e.preventDefault();
        self.animate();
        self.goToLink();
    }
};

pageTransition.prototype.animate = function() {
    var bounds = this.getBounds();
        tweens = this.getTweens(bounds);

    this.animateTo(tweens);
}

pageTransition.prototype.goToLink = function() {
    var target = this.getTarget(),
        delay = this.getDuration();

    setTimeout(function() {
        window.location.href = target
    }, delay);
}

pageTransition.prototype.getDuration = function() {
    var style = window.getComputedStyle(this.el),
        duration = style.transitionDuration;

    duration = (duration.indexOf("ms") > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

    return duration;
}

pageTransition.prototype.getTarget = function(href) {
    var self = this,
    target = href || self.el.href;

    return target;
}

pageTransition.prototype.getBounds = function() {
    var animation = {};

    animation.start = this.el.getBoundingClientRect();
    this.el.classList.add('fullscreen');

    animation.end = this.el.getBoundingClientRect();
    this.el.classList.remove('fullscreen');

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
    this.el.classList.add('transitioning');
    transform = 'translate(' + properties.translate.x + ', ' + properties.translate.y + ')';
    transform += ' scale(' + properties.scale.x + ', ' + properties.scale.y + ')';

    this.el.style.transform = transform;
}

module.exports = pageTransition;