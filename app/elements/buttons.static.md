---
title: n.io element design guide
_options:
  layout: app/layouts/article.static.hbs
---

The default button class can be applied by using the `.nio-button` class, which will be a netural
button with the default button stylings.

<figure class="examples">
  <figcaption>Default button</figcaption>
  <button class="nio-button">default</button>
</figure>

There are four colored variants:

* `--primary`
* `--warning`
* `--info`
* `--danger`


You can wrap multiple buttons into `.nio-button-bar`.

<figure class="examples">
  <figcaption>Default button</figcaption>
  <div class="nio-button-bar">
    <button class="nio-button">default</button>
    <button class="nio-button nio-button--primary">primary</button>
    <button class="nio-button nio-button--info">info</button>
    <button class="nio-button nio-button--warning">warning</button>
    <button class="nio-button nio-button--danger">danger</button>
  </div>
</figure>

Button bars can also have the `.nio-button-bar--grow` modifier to make buttons within button-bars stretch to fit thier available space.

<figure class="examples">
  <figcaption>Default button</figcaption>
  <div class="nio-button-bar nio-button-bar--grow">
    <button class="nio-button nio-button--danger">delete</button>
    <button class="nio-button nio-button--primary">ok</button>
  </div>
</figure>
