---
title: jQuery sideToggle animation issue
author:  Kylie Dale
posted: 20161012
summary:
  jQuery's slideToggle function renders jumpy when classes are added or removed too quickly after function call.'
_options:
  layout: app/layouts/blog.static.hbs
---

## what is slideToggle?

jQuery's `slideToggle()` function displays or hides the selected element with a sliding motion.

## our use case

We were using it to show and hide a nav drawer. The code for opening the nav drawer was as follows:

```
jQuery('.header__nav').slideToggle('slow');
jQuery('header.header, .nav-toggle').addClass('open active');
```

And the code to close the nav drawer looked like:

```
jQuery('.header__nav').slideToggle('slow');
jQuery('header.header, .nav-toggle').removeClass('open active');
```

## the problem

The problem we ran into was that the drawer would begin to animate (either open or closed) and when it was about a quarter of the way done animating to full size, the drawer seemed to jump either open or closed.

This was caused by the `addClass` or `removeClass` function calls right after `slideToggle`. We were adding or removing classes that had styles associated with them. As soon as those classes were added and removed, the styles rendered instantly, and the slide animation stopped.

## more concrete example

In the use case above, the `open` and `active` classes have certain styles assigned to them. For example, when the `open` class is removed from the nav element, the nav has:

```
display: none
```

Therefore, when the animation to close the nav begins, the remove class line is called directly after, `display: none` is applied to the nav, the nav disappears and the animation seems to have stopped.

On the flip side, when the `open` class is added to the nav element,

```
bottom: 0;
left: 0;
```

get set, and the nav jumps to that position shortly after the animation starts.
