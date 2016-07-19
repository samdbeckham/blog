---
layout: article
title:  Automation
background: '#eb9532'
---

For years I’ve been fascinated by automation. Why waste time doing menial tasks when you can program a machine to do them for you?

My love for automation began, not with code, but with factory machinery. I would spend hours watching, 'How it’s made' on the Discovery Channel. In awe of machines crafting everyday items that are often taken for granted. Things like, [springs](https://www.youtube.com/watch?v=omLKbKakDoY), [toothbrushes](https://www.youtube.com/watch?v=p9HFmle54eQ) or [pasta](https://www.youtube.com/watch?v=75bfUmqx82s). I loved how, by running a series of simple tasks, complex objects could be created with ease. Now I port the same principals into my development workflow.

![Crayons being wrapped by machinery](/images/articles/automation/crayons.gif)

I automate everything I can; the creation of projects with [yeoman](http://yeoman.io/), deploying websites with [git hooks](http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), even the [setup](https://gist.github.com/brandonb927/3195465) of my Mac. Anything I’m going to do more than a few times, I automate.

Let’s take this website as an example. The first thing I automated was the cloning my Jekyll boilerplate with Yeoman, adding [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) in the process. This includes a handful of grunt tasks that; compile and [auto-prefix](https://github.com/nDmitry/grunt-autoprefixer) my (s)css, [sprite my SVGs](https://github.com/FWeinb/grunt-svgstore), [lint](https://github.com/stephenmathieson/grunt-jslint) my javascript, compile my blog with [Jekyll](http://jekyllrb.com/), run a local development server, and [watch](https://github.com/gruntjs/grunt-contrib-watch) that server for changes. This allows me to develop the site without having to worry about running all these tasks myself. I just type grunt in the command line and it all gets taken care of. It even reloads the page for me across any devices that are currently on the site.

When I’m ready to deploy, I start a release branch on git flow, run `grunt build` (which minifies, compresses and optimises the site) then push everything up to the repo. I have a deploy script running on my server that picks up that release and pulls the repo down automatically. I don’t even need to SSH into my server. I just push to my repo and my code takes care of the rest.

Using this type of automation not only saves time, but eliminates a lot of mistakes. When I automate things I put tests in place for that help me catch any errors before they go anywhere near production.

Give a man a fish and he’ll eat for a day; teach a man to fish and he’ll eat for a lifetime; automate the fishing process and you’ll feed the world.