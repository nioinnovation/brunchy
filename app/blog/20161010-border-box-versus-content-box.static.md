---
title: Border box versus content box
author:  Kylie Dale
posted: 20161010
summary:
  What is the difference between 'border-box' and 'content-box' in css?
_options:
  layout: app/layouts/blog.static.hbs
---

Since the beginning of css, the `box-sizing` style has always worked the same way by default:
The rendered width of a box is the `width` + `border` + `padding` and the rendered height of a box is the `height` + `border` + `padding`.

As can be imagined, this can be slightly confusing when the box that appears in a browser is smaller than expected.

Therefore, when responsive design began to gain popularity, the `box-sizing` attribute was created.

## box-sizing: content-box

When `box-sizing` is set to `content-box`, the original way css dealt with borders and padding is reflected.

For example, I have the following css:
```
box-sizing: content-box;
width: 100px;
height: 100px;
border: 5px solid black;
padding: 10px;
```
The actual DOM element will render with a width and height of 100px, with 10px of padding on each side before the border is rendered. In this case, the element will appear to have a width and height of 130px each.

Using this method requires the developer to calculate the width and height the DOM element needs to be so that adding a border and/or padding won't change the apparent size of the element (as the example above changed the height and width of the element from 100px to 130px).

## box-sizing: border-box

On the other hand, when the `box-sizing` css attribute is set to `border-box`, the DOM element's width and height are not affected by additional padding or borders.

If instead, I have the following css:

```
box-sizing: border-box;
width: 100px;
height: 100px;
border: 5px solid black;
padding: 10px;
```
The element will be surrounded with a border that has an outer width and height of 100px each, followed by 10px of padding on each side, and then the element sits in the middle. This will make the actual element look as if it has a width and height of 70px.

## Example

The following example shows the two different methods. The left hand element is the first case (`content-box`), the middle blue box has a width and height of 100px to relate the other two images to, and the right hand element is the second case (`border-box`).

<p data-height="265" data-theme-id="0" data-slug-hash="bwKZry" data-default-tab="result" data-user="kyliedale" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/kyliedale/pen/bwKZry/">Box-sizing blog</a> by Kylie Dale (<a href="http://codepen.io/kyliedale">@kyliedale</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
