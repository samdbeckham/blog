(function ($) {
    "use strict";
    $.fn.generateBackground = function (options) {
        // Setup options
        var settings = $.extend({
            triangleSize : 100,
            trianglesHigh: 10,
            trianglesWide: 5,
            skew : 1.73205,
            opacity : 0.3,
            colors : ['#111', '#333', '#555', '#777', '#999', '#bbb', '#ddd', '#fff']
        }, options);

        return this.each(function () {
            settings.backgroundColor = settings.backgroundColor || settings.colors[0];
            var $this = $(this),
                width = settings.triangleSize * settings.trianglesWide * settings.skew,
                height = settings.triangleSize * settings.trianglesHigh,
                background = "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "'>",
                i,
                j,
                v,
                w,
                x,
                y,
                a,
                b,
                c,
                d,
                e,
                getColor = function () {
                    var hex = settings.colors[Math.floor(Math.random() * settings.colors.length)];
                    return hex;
                };

            for (i = -1; i <= settings.trianglesWide; i += 1) {
                for (j = -0.5; j <= settings.trianglesHigh; j += 0.5) {
                    v = (i + (j % 1)) * settings.triangleSize * settings.skew;
                    w = j * settings.triangleSize;
                    x = v + (settings.triangleSize * settings.skew);
                    y = w + settings.triangleSize;
                    a = v + "," + w;
                    b = x + "," + w;
                    c = (v + x) / 2 + "," + ((w + y) / 2);
                    d = v + "," + y;
                    e = x + "," + y;

                    background += "<polygon fill='" + getColor() + "' fill-opacity='" + settings.opacity + "' points='" + a + " " + c + " " + d + " " + "' />";
                    background += "<polygon fill='" + getColor() + "' fill-opacity='" + settings.opacity + "' points='" + b + " " + c + " " + e + " " + "' />";
                }
            }

            background += "</svg>";

            var b64 = 'data:image/svg+xml;base64,' + window.btoa(background),
                url = 'url("' + b64 + '")';

            $this.css({
                'backgroundImage': url,
                'backgroundColor' : settings.backgroundColor
            });
        });
    };
}(jQuery));

var colorRange = ['#e74c3c', '#c0392b', '#d35400', '#e67e22', '#f39c12', '#f1c40f', '#27ae60', '#2ecc71', '#19b497', '#1abc9c', '#3498db', '#2980b9', '#8e44ad', '#9b59b6'],
    rangeValue = {};

$('#hero').generateBackground({
    colors : colorRange.slice(0,Math.floor($('#colors')[0].value / (100 / colorRange.length)) + 1),
    triangleSize : Math.floor($('#triangleSize')[0].value * 4 + 10),
    trianglesHigh : Math.floor((100 - $('#triangleSize')[0].value) / 5 + 2),
    trianglesWide : Math.floor((100 - $('#triangleSize')[0].value) / 20 + 2),
    opacity : Math.floor($('#opacity')[0].value) / 100,
    backgroundColor : colorRange[0]
});

$('input[type=range]').each(function(){
    var name = $(this).attr('id'),
        value = $(this)[0].value;

    rangeValue[name] = value;
});

$('input[type=range]').on('change', function(e) {
    var name = $(this).attr('id'),
        value = $(this)[0].value;

    if( Math.abs(rangeValue[name] - value) < 10 ){
        return;
    }

    rangeValue[name] = value;

    $('#hero').generateBackground({
        colors : colorRange.slice(0,Math.floor($('#colors')[0].value / (100 / colorRange.length)) + 1),
        triangleSize : Math.floor($('#triangleSize')[0].value * 4 + 10),
        trianglesHigh : Math.floor((100 - $('#triangleSize')[0].value) / 5 + 2),
        trianglesWide : Math.floor((100 - $('#triangleSize')[0].value) / 20 + 2),
        opacity : Math.floor($('#opacity')[0].value) / 100,
        backgroundColor : colorRange[0]
    });
});