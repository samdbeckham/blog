---
layout: article
title: A Sprinkling of Web Components
background: '#e8345a'
crosspost_to_medium: true
---

At UpFront mini last year, I spoke about [sprinkling in Web components](http://slides.com/samdbeckham/using-polymer-today#/8).
It's a technique I used myself recently so I thought I'd share my experience with you.

If you missed [my last post](https://sam.beckham.io/wrote/changing-lanes.html), I have recently started working at [Bytemark](https://bytemark.co.uk).
We're making a big hiring push at the moment and we needed an unobtrusive way to shout about this on our website(s).
We toyed with a few ideas, but ultimately decided on adding a small, dismissible notification.
I could have written my own markup, styled it with some CSS, added some javascript to trigger and hide the notification, test everything, compile, build.
I *could* do that, but it's a lot of effort, and we developers are intrinsically lazy.

An off-the-shelf solution was what I wanted.
Something robust, pre-tested and easy to modify.
Web components were that solution.
More specifically the [`<paper-toast />`](https://elements.polymer-project.org/elements/paper-toast) element.
It ticked all the boxes and it was a good excuse to start using web components in a production environment.

## Adding it in
Thanks to html imports, adding in this web component was really easy.
It's a three step process, with an optional fourth step.
Download, import, use, and customise.

### Step 1
The first thing we need to do is get the component.
Polymer uses [bower](https://bower.io/) to serve it's components.
It's not the most elegant solution, but it does the job.
Fire up your console and run:

{% highlight bash %}
$ bower install --save PolymerElements/paper-toast
{% endhighlight %}

### Step 2
Now we have the component in our repo, it's time to include it on the page.
The `<paper-toast />` element has a few dependencies, including polymer itself, but we don't need to worry about them.
Thanks to the wonders of html imports, we just need to import the element.

If we want it to work in more than Chrome and Firefox, we need to include a polyfill.
This polyfill gets installed automatically when we install the `<paper-toast />` element.
We just need to pull it into the head, above the html import for the element.Boom, browser support ([kind of](https://www.polymer-project.org/1.0/docs/browsers)).

{% highlight html %}
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
<link rel="import" href="bower_components/paper-toast/paper-toast.html">
{% endhighlight %}

### Step 3
The element is in the repo, it's included on the page; it's time to use it.
For one last time, here's our one liner.
Blink, and you'll miss it.

{% highlight html %}
<paper-toast id="careersNotification" text="We're hiring!" opened></paper-toast>
{% endhighlight %}

Okay, so it's in there, but it's not very helpful.
Lets take the text out of the attribute and drop in some html:

{% highlight html %}
<paper-toast id="careersNotification" opened>
  We're hiring, visit our <a href="http://careers.bytemark.co.uk">careers page</a> to find out more.
</paper-toast>
{% endhighlight %}

### Step 4 (optional)
We've now done everything you need to get that notification showing up on the page.
But what if we want to change the behaviour? Luckily, polymer and web components make this easy too.
In our case, we wanted the element to be persistent and dismissible.
Easy peasy.

{% highlight html %}
<paper-toast id="careersNotification" duration="0" opened>
  We're hiring, visit our <a href="http://careers.bytemark.co.uk">careers page</a> to find out more.
  <a href="#" onclick="careersNotification.toggle()">close</a>
</paper-toast>
{% endhighlight %}

All we did was add a `duration="0"` attribute to cancel the timeout and keep the notification on the page.
Then we added a link (though this could be any element).
We gave the link a click handler that calls, `careersNotification.toggle()`.
Which, unsurprisingly, toggles the notification.

There's a whole lot more you can do with this element.
Just take a look at [the docs]() to find out more.

## Progressive enhancement
A lot of people worry about web components and progressive enhancement.
But, the way I see it, this **is** a progressive enhancement.
We have a website that works great without web components.
If you're using a browser that can run them, you get a nice notification.
If you're not, you simply don't get the notification.
No harm done.
This is a textbook progressive enhancement.
[Jeremy](http://adactio.com) would be proud.

## Playing with Polymer
Want to have a play about with some polymer elements yourself? Take a look at the [Polymer element catalogue](https://elements.polymer-project.org/) and start pulling something together.
If it's not for a production app and you don't want all the hassle that goes with bower, then take a look at [polygit](https://polygit.org/).
Just don't use polygit for production.
You have been warned.
