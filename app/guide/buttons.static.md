---
title: n.io buttons
_options:
  layout: app/layouts/guide.static.hbs
---

Buttons can be used for actions in forms, dialogs, links, and more.

## Buttons (stable)

<figure class="examples">
  <figcaption>nio button options</figcaption>
  <button class="nio-button">default</button>
  <br>
  <button class="nio-button nio-button--primary">primary</button>
  <button class="nio-button nio-button--info">info</button>
  <button class="nio-button nio-button--warning">warning</button>
  <button class="nio-button nio-button--danger">danger</button>
  <button class="nio-button nio-button--alt">alt (primary)</button>
</figure>

```html
<button class="nio-button">default</button>
<button class="nio-button nio-button--primary">primary</button>
<button class="nio-button nio-button--info">info</button>
<button class="nio-button nio-button--warning">warning</button>
<button class="nio-button nio-button--danger">danger</button>
<button class="nio-button nio-button--alt">alt (primary)</button>
```
### Component overview

#### .nio-button
extends `.nio-bordered`

`$font-sans` is used to set the font

`$color-default` is used to set the color

`$dist-large` is used to set the padding

#### Modifiers
`--primary`

`$color-primary` is used to set the color

`--alt`, `--danger`

`$color-danger` is used to set the color

`--warning`
`$color-warning` is used to set the color

`--info`
`$color-info` is used to set the color

### Interactions
`hover` and `focus` transition/transform the box-shadow `$dist-normal` and increase the scale

`active` transitions/transforms the element down `$dist-hair`


### Extend it

## Buttons with icons (prototypical)

<figure class="examples">
<figcaption>nio buttons with icons</figcaption>
<button class="nio-button nio-button--with-icon nio-button--primary">primary</button>
<button class="nio-button nio-button--with-icon nio-button--info">info</button>
<button class="nio-button nio-button--with-icon nio-button--warning">warning</button>
<button class="nio-button nio-button--with-icon nio-button--danger">danger</button>
<button class="nio-button nio-button--with-icon nio-button--alt">alt with icon</button>
</figure>

```html
<button class="nio-button nio-button--with-icon nio-button--primary">primary</button>
<button class="nio-button nio-button--with-icon nio-button--info">info</button>
<button class="nio-button nio-button--with-icon nio-button--warning">warning</button>
<button class="nio-button nio-button--with-icon nio-button--danger">danger</button>
<button class="nio-button nio-button--with-icon nio-button--alt">alt with icon</button>
```

## Button bar
<figure class="examples">
<figcaption>nio button bar</figcaption>
<div class="nio-button-bar">
  <button class="nio-button nio-button">info</button>
  <button class="nio-button nio-button--info">warning</button>
  <button class="nio-button nio-button--alt">danger</button>
</div>
</figure>

```html
<button class="nio-button nio-button--with-icon nio-button--primary">primary</button>
<button class="nio-button nio-button--with-icon nio-button--info">info</button>
<button class="nio-button nio-button--with-icon nio-button--warning">warning</button>
<button class="nio-button nio-button--with-icon nio-button--danger">danger</button>
<button class="nio-button nio-button--with-icon nio-button--alt">alt with icon</button>
```
