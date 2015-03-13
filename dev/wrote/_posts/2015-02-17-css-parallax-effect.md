---
layout: article
title: CSS Parallax Effect
background: '#c0392b'
---

I recently discovered that one of my pens on CodePen is one of the [most hearted pens of 2014](http://codepen.io/2014/popular/10/). I'm stunned.

This is the pen in question: [Firewatch parallax in CSS](http://codepen.io/samdbeckham/pen/OPXPNp). Scroll inside the pen to see the effect.

<p data-height="512" data-theme-id="0" data-slug-hash="OPXPNp" data-default-tab="result" data-user="samdbeckham" class='codepen'>See the Pen <a href='http://codepen.io/samdbeckham/pen/OPXPNp/'>Firewatch Parallax in CSS</a> by Sam Beckham (<a href='http://codepen.io/samdbeckham'>@samdbeckham</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Full disclaimer:** I did not design or illustrate any of this.
If you haven't seen it already, this is a remake of the beautifully illustrated [Firewatch]() website.
I wanted to see if I could do parallax with just CSS and this is the best designed parallax effect I’ve seen on a website.

## How it works

Parallax gets mis-labelled a lot in web design.
Often, anything that moves as you scroll through a site gets called parallax.
But that's not what it means.
It's an effect that you probably see every day in the real-world and, when used correctly, can add a nice sense of depth to a website.
The definition of parallax is:

> The effect whereby the position or direction of an object appears to differ when viewed from different positions, e.g. through the viewfinder and the lens of a camera.

This gif by [Trent Walton](http://trentwalton.com/2013/01/20/parallax-scrolling-on-the-web/), illustrates the effect quite well.

![Trent Walton's real-life parallax example](/images/articles/firewatch/parallax.gif)

In my pen, I used CSS3d transforms to give the scene some depth.
When combined with some perspective you can get some really nice results.

## How it's made
*The pen has six layers, but for clarity we'll run through an example with three.*
We start off with our wrapper, or stage. Inside that stage we have our layers, one element for each.

{% highlight html %}
<div class="parallax__stage">
    <div class="parallax__layer parallax__layer--0"></div>
    <div class="parallax__layer parallax__layer--1"></div>
    <div class="parallax__layer parallax__layer--2"></div>
</div>
{% endhighlight %}

That's essentially it for the HTML.
We could add images inside them divs, but we'll keep it simple.
Now, on to the CSS.

We want the stage to fill the viewport and we want each layer to be the same size as the frame.
That's pretty easy.

{% highlight scss %}
.parallax__stage {
    height: 100vh;
    left: 0;
    overflow: auto;
    position: absolute;
    top: 0;
    width: 100%;
}

.parallax__layer {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}
{% endhighlight %}

Now that we've set the stage, we need to add our (p)layers.
This is where the math comes in to play.
We could use standard CSS here, but mixins make it much easier and extendable.

{% highlight scss %}
$parallax__layers: 3;
$parallax__amount: 1;

@for $i from 0 through $parallax__layers {
    $distance: -$parallax__amount * ($parallax__layers - $i);
    .parallax__layer--#{$i}{
        background-color: rgba(0,0,0,(1 + $i) / 10);
        transform: translateZ($distance#{px});
    }
}
{% endhighlight %}

This mixin loops through each modifier and pushes it back in the z-axis.
The `$distance` variable determines the distance each layer goes back.
I've also modified the color on each one so we can see them clearer later.

If all you can see at the moment is a screen full of gray nothing; don't adjust your set, that's what we're expecting to see.
Let's add a little perspective.

{% highlight scss %}
.parallax__stage {
    perspective: 1;
}
{% endhighlight %}

And there it is, 100% CSS parallax.
Well, not quite.
You won't be able to scroll yet because there's nowhere to scroll to.
Just add in an element below the stage and give it the following properties.

{% highlight scss %}
.content {
    background: rgba(0,0,0,0.8);
    margin-top: 100vh;
    min-height: 100vh; // to make up for the lack of content
    position: relative;
    width: 100%;
}
{% endhighlight %}

Now you can scroll away and get all that parallax loveliness.

I've made [a pen of this example](http://codepen.io/samdbeckham/pen/WbaPBQ) so you can play about, fork it and create your own version.
I really do like CodePen.

## Differences
There are a few differences with the example and the Firewatch pen.
Mainly, the Firewatch images I used were all the same size so I had to do some maths trickery to scale them back up.
It's just an modification of the mixin we used to push them back in the z-axis.

{% highlight scss %}
@for $i from 0 through $parallax__layers {
    $distance: ($parallax__layers - $i) / 2;
    .parallax__layer--#{$i}{
        transform: translateZ(-100 * $distance#{px}) scale($distance + 1);
    }
}
{% endhighlight %}

I also did some re-positioning of the images, and placed a cover over the top, to stop the elements peeking through each other.
It's all pretty straight forward though, and you can look at all the code on the pen, so I'll leave that as an excersise to the reader.
