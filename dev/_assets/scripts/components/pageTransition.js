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
    };
};

pageTransition.prototype.animate = function() {
    'use strict';
    var bounds = this.getBounds(),
        tweens = this.getTweens(bounds);

    this.animateTo(tweens);
};

pageTransition.prototype.goToLink = function() {
    'use strict';
    var target = this.getTarget(),
        delay = this.getDuration();

    this.preload(target);

    setTimeout(function() {
        window.location.href = target;
    }, delay);
};

pageTransition.prototype.preload = function(page) {
    'use strict';
    var req = new XMLHttpRequest();
    req.open('GET', page, true);
    req.send(null);
};

pageTransition.prototype.getDuration = function() {
    'use strict';
    var style = window.getComputedStyle(this.el),
        duration = style.transitionDuration;

    duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

    return duration;
};

pageTransition.prototype.getTarget = function(href) {
    'use strict';
    var self = this,
    target = href || self.el.href;

    return target;
};

pageTransition.prototype.getBounds = function() {
    'use strict';
    var animation = {};

    animation.start = this.el.getBoundingClientRect();
    this.el.classList.add('fullscreen');

    animation.end = this.el.getBoundingClientRect();
    this.el.classList.remove('fullscreen');

    return animation;
};

pageTransition.prototype.getTweens = function(animation) {
    'use strict';
    var properties = {};

    properties.translate = {};
    properties.scale = {};

    properties.translate.y = animation.end.top - animation.start.top + 'px';
    properties.translate.x = animation.end.left - animation.start.left + 'px';

    properties.scale.y = animation.end.height / animation.start.height;
    properties.scale.x = animation.end.width / animation.start.width;

    return properties;
};

pageTransition.prototype.animateTo = function(properties) {
    'use strict';
    var transform;

    this.el.classList.add('transitioning');
    transform = 'translate(' + properties.translate.x + ', ' + properties.translate.y + ')';
    transform += ' scale(' + properties.scale.x + ', ' + properties.scale.y + ')';

    this.el.style.transform = transform;
    this.el.style.mozTransform = transform;
    this.el.style.webkitTransform = transform;
};

module.exports = pageTransition;
