---
layout: article
title: Resilient Web Design
background: '#5f7995'
---

I've just finished reading Jeremy Keith's new book, [Resilient Web Design](https://resilientwebdesign.com/). It was a fantastic read, but what really impressed me was its use of [service workers](#).

Jeremy released the book for free on the web. Instead of having to download a PDF, or an ePub (which you can still [do](https://resilientwebdesign.com/#formats)) and having all the issues that come with reading these formats—you could read the book directly on the site. The only issue was, I was travelling to, from, and around London at the time so my connection was pretty far from reliable. Opening the next chapter, downloading the accompanying images, even picking up where I left off, could be a real pain. Thankfully by the time I'd finished reading the title of the book, the rest was quietly stored in the cache by a service worker for an interruption-free read. This is all in due part to [service workers](/wrote/greased-lightning.html)

This is a relatively simple use of service workers and something I've seen on many blogs (including my own). But they usually feel superfluous. Applied in this context, service workers felt right at home. It was seamless, behind the scenes, and it just worked. If your device doesn't support service workers, the core functionality still remains. You can still view the content. A true hallmark of progressive web development. Which is exactly what this book is about. If you haven't already, [go read it](https://resilientwebdesign.com/).
