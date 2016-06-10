---
title: n.io boxes
_options:
  layout: app/layouts/guide.static.hbs
---

A box is an area set off from its surroundings. It can be used to visually group or distinguish content.

## Boxed
(prototypical)

<div class="nio-boxed">This is an example of the default `nio-boxed` class—you can't see any borders, but I am left-justified, have padding, rounded corners, and am in a box. Use me with my [modifiers](#component-overview).</div>
<br>
<div class="nio-boxed nio-boxed--shaded">I am the <span class="nio-code nio-code--in-block">nio-boxed--shaded</span> box variant, I am shaded.</div>
<br>
<div class="nio-boxed nio-boxed--bordered">I am the `nio-boxed--bordered` box variant, I have a border.</div>

```html
// default
<div class="nio-boxed">This is an example of the default `nio-boxed` class—you can't see any borders, but I am left-justified, have padding, rounded corners, and am in a box. Use me with my [variants](#component-overview).</div>
<br>
// shaded
<div class="nio-boxed nio-boxed--shaded">I am the <span class="nio-code nio-code--in-block">nio-boxed--shaded</span> box variant, I am shaded.</div>
<br>
// bordered
<div class="nio-boxed nio-boxed--bordered">I am the `nio-boxed--bordered` box variant, I have a border.</div>
```

### Component overview

#### .nio-boxed

`$dist-medium` is used to set the padding

`$dist-thin` is used to set the border radius

#### Modifiers
`--shaded`

`$color-faint` is used to set the background color

`--bordered`

`$color-light` is used to set the border color

`$dist-hair` is used to set the border width

### Extend it

<figure class="examples">
  you can extend the <span class="nio-code">nio-boxed</span> class to make things like this 'examples' box
  <figcaption>it can even have a caption</figcaption>
</figure>

<div class="nio-code-block">
  this is a <span class="nio-code nio-code--in-block">nio-code-block</span>, an example of extending <span class="nio-code nio-code--in-block">nio-boxed</span>, <span class="nio-code nio-code--in-block">nio-boxed--bordered</span>, <span class="nio-code nio-code--in-block">nio-boxed--shaded</span> and <span class="nio-code nio-code--in-block">nio-stack-shadow</span>
</div>
