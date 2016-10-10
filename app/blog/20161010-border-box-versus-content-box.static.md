---
title: Border box versus content box
author:  Kylie Dale
posted: 20161010
summary:
  What is the difference between `border-box` and `content-box` in css?
_options:
  layout: app/layouts/blog.static.hbs
---

Since the beginning of css, the `box-sizing` style has always worked the same way by default:
The actual rendered width of a box is the `width` attribute that is set + border + padding and the actual rendered height of a box is the `height` attribute that is set + border + padding.

As can be imagined, this can be slightly confusing when the box that appears in a browser is smaller than expected.

Therefore, when responsive design began to gain popularity, the `box-sizing` attribute was created.

## box-sizing: border-box

Now, when the `box-sizing` css attribute is set to `border-box`, the element's width and height are not affected by additional padding or borders.

For example, if I have the following css:

```
box-sizing: border-box;
width: 100px;
height: 100px;
border: 5px solid black;
padding: 10px;
```
The element will be surrounded with a border that has an outer width and height of 100px each, followed by 10px of padding on each side, and then the element sits in the middle. This will make the actual element look as if it has a width and height of 70px.

## box-sizing: content-box

On the other hand, when `box-sizing` is set to `content-box`, the original way css dealt with borders and padding is reflected.

If instead, I have the following css:
```
box-sizing: content-box;
width: 100px;
height: 100px;
border: 5px solid black;
padding: 10px;
```
The actual element will render with a width and height of 100px, with 10px of padding on each side before the border is rendered. In this case, the element will appear to have a width and height of 130px each.

## Example

The following image shows the two different methods. The left hand element is the first case (`border-box`), the middle blue box has a width and height of 100px to relate the other two images to, and the right hand element is the second case (`content-box`).

![](/images/box-sizing/content-vs-border-box.png)
