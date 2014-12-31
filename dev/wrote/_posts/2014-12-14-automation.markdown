---
layout: article
title:  Automation
background:
  image: http://import.jekyllrb.com/img/octojekyll.png
  color: '#31394e'
---

For years I've been facinated by automation. Why waste time doing menial tasks when you can program a machine to do them for you?

My love for automation began, not with code, but with [factory machinery](REWORD). I would spend hours watching *How it's made* on the Discovery Channel, in awe of machines crafting everyday items that are often taken for granted. Things like, [springs](https://www.youtube.com/watch?v=omLKbKakDoY), [toothbrushes](https://www.youtube.com/watch?v=p9HFmle54eQ) or [pasta](https://www.youtube.com/watch?v=75bfUmqx82s). I loved how, by running a series of simple tasks, complex objects could be created with ease. Whilst creating and configuring factory machinery was never my thing, I could port the same principals into my own workflow.

![Crayons being wrapped by machinery](/images/articles/automation/crayons.gif)

Now I automate everything I can; I automate the creation of my projects with [yeoman](#), I automate deplying my websites with [git hooks](#), I even automated the setup of my new mac with [custom bash scripts](#). Anything that I know I'm going to do more than three or four times, I automate.

Let's take this website as an example. The first thing I automated was the cloning my Jekyll boilerplate with Yeoman, adding [git-flow](#) in the process. This includes a handful of grunt tasks that, [compile](#) and [auto-prefix](#) my (s)css, [sprite my SVGs](#), [lint](#) my javascript, compile my blog with [Jekyll](#), run a [local development server](#) and [watch](#) that server for changes. This allows me to rapidly develop the site without having to worry about running all these tasks myself. I simply type `grunt` in the command line and it all gets taken care of. It even reloads the page for me across any devices that are currently on the site.

When I'm ready to deploy I start a new release branch on git flow, run `grunt build` which minifies, compresses and optimises the site and push everything up to the repo. I have a [deploy script](#) running on my server that picks up on that release being pushed and pulls the repo down automatically, I don't even need to SSH into my server, I just push to my repo and my code takes care of the rest.

Using this type of automation not only saves time, but eliminates a lot of mistakes. In the past I've pushed unminified CSS to production, added giant images to sites and published javascript errors that can (and have) broken functionality. When I automate things I put tests in place for all this stuff that helps me catch any errors before it goes anywhere near production.

Give a man a fish and he'll eat for a day; teach a man to fish and he'll eat for a lifetime; automate the fishing process and you'll feed the world.