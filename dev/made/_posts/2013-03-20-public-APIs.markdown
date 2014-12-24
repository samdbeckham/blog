---
layout: article
title:  "Public APIs"
description: "Millions of people share their photos, thoughts and data online - and now we can access it easily with public APIs."
---

Millions of people share their photos, thoughts and data online - and now we can access it easily with public APIs.

A brief introduction
----------
If you've ever used a Twitter widget to display Tweets on a website - like most developers have - then you've already used an API. An API (Application Programming Interface) is a way for programs to communicate with each other, generally using simple request and response messages.

In the case of the common RESTful web API it’s as simple as sending a http response, [eg].

    http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b5b0a30288a8cc21468d22e22c3255ac&format=rest

This will return a JSON file that we can pull information from and use on our website or app.

4 pics 1 word
----------
In the example at the top of this article, I have used the Instagram API to pull in four images tagged with a pre-defined keyword. That keyword then becomes the answer to the puzzle - much like the 4 pics 1 word app that's doing the rounds at the moment.

This is an example of what can be achieved quite quickly with an API. You get a fully functioning app without the headache of having to source and store the data yourself. You can have a look at the code on [GitHub][].

OAuth and request limits
---------
Nothing good ever comes easy. When Twitter first launched their API in 2006 it only required basic authentication to access an unlimited amount of data. Three years later they brought in a 20,000 requests-per-hour limit on that data and have continued to throttle it ever since. Today that limit stands at a mere 150 unauthorised requests per-hour and will very shortly need Twitter’s OAuth service to make any requests at all.

OAuth is a bit of a headache at first - especially for us front end devs - but luckily there's [plenty of help][] out there to [get you started][]. If you are writing a new app or widget that uses the Twitter API - then I suggest going straight for the OAuth approach with [API 1.1] because its going to be a huge pain in the ass when the big switchover happens in June.

[eg]: http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b5b0a30288a8cc21468d22e22c3255ac&format=rest
[GitHub]: https://github.com/sambeckham/blog/blob/master/src/scripts/public-APIs.js
[plenty of help]: http://www.youtube.com/playlist?list=PL032A5954701D543C
[get you started]: http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/
[API 1.1]: https://dev.twitter.com/docs/api/1.1