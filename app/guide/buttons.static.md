---
title: n.io buttons
_options:
  layout: app/layouts/guide.static.hbs
---

The default button class can be applied by using the `.nio-button` class, which will be a netural
button with the default button stylings.

```
<button class="nio-button">default</button>
```

<figure class="examples">
  <figcaption>Default button</figcaption>
  <button class="nio-button">default</button>
</figure>

There are four colored variants:

* `--primary`
* `--warning`
* `--info`
* `--danger`

```
<button class="nio-button nio-button--primary">primary</button>
<button class="nio-button nio-button--info">info</button>
<button class="nio-button nio-button--warning">warning</button>
<button class="nio-button nio-button--danger">danger</button>
```

<figure class="examples">
  <figcaption>Colors</figcaption>
  <button class="nio-button nio-button--primary">primary</button>
  <button class="nio-button nio-button--info">info</button>
  <button class="nio-button nio-button--warning">warning</button>
  <button class="nio-button nio-button--danger">danger</button>
</figure>

You can add the default icons to these button by adding the `.nio-button--with-icon` modifier.

```
<button class="nio-button nio-button--with-icon nio-button--primary">primary</button>
<button class="nio-button nio-button--with-icon nio-button--info">info</button>
<button class="nio-button nio-button--with-icon nio-button--warning">warning</button>
<button class="nio-button nio-button--with-icon nio-button--danger">danger</button>
```

<figure class="examples">
  <figcaption>Iconed colors</figcaption>
  <button class="nio-button nio-button--with-icon nio-button--primary">primary</button>
  <button class="nio-button nio-button--with-icon nio-button--info">info</button>
  <button class="nio-button nio-button--with-icon nio-button--warning">warning</button>
  <button class="nio-button nio-button--with-icon nio-button--danger">danger</button>
</figure>

There is also a red button that can be used as a primary action, by using the `.nio-button--alt` modifier. However, avoid using both an `--alt` and `--danger` button in the same set to avoid confusion.


```
<button class="nio-button nio-button--alt">alt</button>
<button class="nio-button nio-button--with-icon nio-button--alt">alt with icon</button>
```

<figure class="examples">
  <figcaption>Alternate Primary Button</figcaption>
  <button class="nio-button nio-button--alt">alt</button>
  <button class="nio-button nio-button--with-icon nio-button--alt">alt with icon</button>
</figure>
