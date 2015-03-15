---
layout: work
title: Omega Kitchens
client: Omega PLC
link: 'http://erkitchens.co.uk'
background: '#e74c3c'
---

Omega kitchens wanted a series of sites building for their four brands.
[English Rose](http://erkitchens.co.uk), [Sheraton](http://sheratonkitchens.co.uk), [Mackintosh](http://mackintoshkitchens.co.uk), and [Chippendale](http://chippendalekitchens.co.uk).


Each website needed to use the same templates and re-use a lot of the content.
We achieved this, from a back-end perspective, using that Laravel framework and the [Super Clever Stuff](http://supercleverstuff.com) API.
This allowed us to share a great deal of content and override sections as we needed.

![The homepage of all four brands. English Rose, Sheraton, Mackintosh and Chippendale; respectively.](/images/work/omega/all-brands.jpg)

For the front end I set up a grunt workflow that generated pattern libraries for each of the brands.
The assets from these pattern libraries were then pulled into each respecting brand website.
Using SCSS, I could use a base set of styles with different variables and modifiers for each of the brands.
Doing it in this way made development a great deal quicker and allowed me to push fixes out to all four sites simultaneously.

![Taken from the color scheme section of the pattern library for English Rose and Sheraton](/images/work/omega/pattern-library__colors.jpg)

Using pattern libraries allowed us to separate the concerns of front and back end.
I could focus on the styles without having to worry about databases, PHP errors or server dependancies.
Coupled with Grunt, this made a rapid front-end workflow.

![Mackintosh Kitchens homepage](/images/work/omega/mackintosh.jpg)
![Focusing on the gorgeous photography](/images/work/omega/english-rose__our-kitchens.jpg)
