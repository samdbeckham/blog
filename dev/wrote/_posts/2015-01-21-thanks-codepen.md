---
layout: article
title: Thanks Codepen!
background: '#c0392b'
---

Once again, one of my pens has gotten a lot of attention. So much—in fact—that it’s one of the most hearted pens of 2014. I’m stunned.

This is the pen in question: [Firewatch parallax in CSS](http://codepen.io/samdbeckham/pen/OPXPNp). Scroll inside the pen to see the effect.

<p data-height="512" data-theme-id="0" data-slug-hash="OPXPNp" data-default-tab="result" data-user="samdbeckham" class='codepen'>See the Pen <a href='http://codepen.io/samdbeckham/pen/OPXPNp/'>Firewatch Parallax in CSS</a> by Sam Beckham (<a href='http://codepen.io/samdbeckham'>@samdbeckham</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Full disclaimer:** I did not design or illustrate any of this.
If you haven't seen it already, this is a remake of the beautifully illustrated [Firewatch]() website.
I wanted to see if I could do parallax with just CSS and this is the best designed parallax effect I’ve seen on a website.
It was a great fit.

## How it works

Parallax gets mis-used a lot in web design.
Often, anything that moves as you scroll through the site gets labeled as parallax.
That is not what it means, parallax is:

> The effect whereby the position or direction of an object appears to differ when viewed from different positions, e.g. through the viewfinder and the lens of a camera.

This gif illustrates the effect quite well.

![Trent Walton's real-life parallax example](/images/articles/firewatch/parallax.gif)

Most Javascript solutions fake this and just move all images on one plane, usually with a modifier to vary the speed.
That's not what I did here.
I used CSS3d transforms to give the scene some actual depth and the effect comes along with it for free.

## How it's made
The pen has six layers, but for clarity we'll do it with three.
We start off with our wrapper, or stage. Inside that stage we have our layers, one div for each.

{% highlight html %}
<div class="parallax__stage">
    <div class="parallax__layer parallax__layer--0"></div>
    <div class="parallax__layer parallax__layer--1"></div>
    <div class="parallax__layer parallax__layer--2"></div>
</div>
{% endhighlight %}

That's essentially it for the HTML. I put images in the fire watch example, but that was just to make it pretty.
Now, on to the CSS. 
We want the stage to fill the viewport and we want each layer to be the same size as the frame.
That's pretty easy.

{% highlight scss %}
.parallax__stage {
    height: 100vh;
    left: 0;
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

Now that we've set the stage, we need to add our players.
This is where the maths come in to play.
The mixin might look complicated but I'll talk you through it.


{% highlight scss %}
$parallax__layers: 3;
$parallax__amount: 1;

@for $i from 0 through $parallax__layers {
    $x: -$parallax__amount * ($parallax__layers - $i);
    .parallax__layer--#{$i}{
        background-color: rgba(0,0,0,(1 + $i) / 10);
        transform: translateZ($x#{px});
    }
}
{% endhighlight %}

This mixin loops through each modifier and pushes it back in the z-axis.
The `$x` variable determines the amount each layer goes back.
I've also modified the color on each one so we can see them clearer later.

If all you can see at the moment is a screen full of gray nothing; don't adjust your set, that's what we're expecting to see.
Let's add a little perspective.

{% highlight scss %}
.parallax__stage {
    perspective: 1;
}
{% endhighlight %}

And there it is, 100% CSS parallax.
You won't be able to scroll yet because there's nowhere to scroll to.
Just add in an element below the stage and give it the following properties.

{% highlight scss %}
.content {
    margin-top: 100vh;
    min-height: 100vh; // to make up for the lack of content
    position: relative;
    width: 100%;
}
{% endhighlight %}

Now you can scroll away and get all that parallax loveliness.

I've made a pen of this example so you can play about, fork it and create your own version.
I really do like CodePen.

## Differences
There are a few differences with the example and the Firewatch pen.
Mainly, the Firewatch images I used were all the same size so I had to do some maths trickery to scale them back up.
It's just an extension of the mixin we used to push them back in the z-axis.

{% highlight scss %}
@for $i from 0 through $parallax__layers {
    $x: ($parallax__layers - $i) / 2;
    .parallax__layer__#{$i}{
        transform: translateZ(-100 * $x#{px}) scale($x + 1);
    }
}
{% endhighlight %}

I also did some re-positioning of the images, and placed a cover over the top, to stop the elements peeking through each other.
It's all pretty straight forward though, and you can look at all the code on the pen, so I'll leave that as an excersise to the reader.
