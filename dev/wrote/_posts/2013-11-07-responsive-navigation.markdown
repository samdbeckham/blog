---
layout: article
title:  "Responsive Navigation"
description: "A discussion about navigation ion responsive websites"
---

Recently I’ve been coming across the same problem with website navigation. People seem to want to put links to 25+ pages in the main navigation area and finding ways to make them fit is becoming a chore.

The problem arises in two main areas, touch devices and small viewports. The latter is a fairly obvious problem — there are too many links and not enough pixels. You can usually get around this by grouping the pages and using a drop-down menu system, which can be adapted slightly for smaller viewports. I found [a fantastic example](http://responsivenavigation.net/examples/multi-toggle/) of this kind of thing and have been using it in the majority of my sites for some time now. However – and I don’t know how I didn’t notice this before – this menu-system falls down on touch devices when the top-level of the menu is a page in itself.

<div class=“example”>
    <nav class="navigation navigation--main">
        <ul>
        <li class="navigation--element has-submenu">
            <a>Fruit</a>
            <ul class="navigation--drop-down">
                <li><a>Apple</a></li><!--
                --><li><a>Banana</a></li><!--
                --><li><a>Lemon</a></li><!--
                --><li><a>Peach</a></li>
            </ul>
        </li><!--
        --><li class="navigation--element has-submenu">
            <a>Vegetables</a>
            <ul class="navigation--drop-down">
                <li><a>Broccoli</a></li><!--
                --><li><a>Carrots</a></li><!--
                --><li><a>Peas</a></li><!--
                --><li><a>Cucumber</a></li>
            </ul>
        </li><!--
        --><li class="navigation--element"><a>Bread</a></li><!--
        --><li class="navigation--element"><a>Bacon</a></li>
        </ul>
    </nav>
</div>

Because touch devices don’t have a hover state you have to tap on the top-level element to open it’s sub-menu. *This behaviour does differ on certain devices but that’s a separate issue.* This doesn’t seem like such a big deal in the examples I’ve shown but consider for a moment - in the example above - that ‘Colors’  is not just a heading for Red, Green, Blue, etc; but that Colors is a page in itself. If you’re using a mouse that’s fine, hover to access the menu, click to access the page. But when both the hover and the click become a single tap what would you expect to happen when you tapped on the word, ‘Colors’?

This has really been bugging me for some time now and I’ve tried to tackle it in a number of different ways, but every single one has it’s issues and I’ve not really found a satisfactory solution yet.

Discuss
----------
I’ve decided it would be good to open this to discussion. I’ve chucked [Disqus](http://disqus.com/) on my site now so we can — hopefully — come up with a solution to this. I’m really looking forward to your suggestions.
