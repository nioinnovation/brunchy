---
title: n.io headings
_options:
  layout: app/layouts/guide.static.hbs
---

You can create a primary heading using the `.nio-heading` class; this base header has a font size of `$text-size-normal`.

Example Usage:

```html
<div class="nio-heading">Standard Heading</div>
```

<figure class="examples">
  <figcaption>The Standard Header</figcaption>
  <div class="nio-heading">Standard Heading</div>
</figure>

## Size Variants

There are also *six* size variants, ranging from `$text-size-huge` to `$text-size-small`.

* `--primary`
* `--secondary`
* `--tertiary`
* `--quaternary`
* `--quinary`
* `--senary`

Example Usage:

```html
<div class="nio-heading nio-heading--primary">primary heading</div>
<div class="nio-heading nio-heading--tertiary">tertiary heading</div>
```

<figure class="examples">
  <figcaption>Size Variants</figcaption>
  <div class="nio-heading nio-heading--primary">primary heading</div>
  <div class="nio-heading nio-heading--secondary">secondary heading</div>
  <div class="nio-heading nio-heading--tertiary">tertiary heading</div>
  <div class="nio-heading nio-heading--quaternary">quaternary heading</div>
  <div class="nio-heading nio-heading--quinary">quinary heading</div>
  <div class="nio-heading nio-heading--senary">senary heading</div>
</figure>

However, it is preferred to mix this helper into a specific selector with SCSS.

```scss
[selector] { @extend .nio-heading, .nio-heading--primary; }
```

## centered headings

Headings can be centered using the `.nio-heading--centered`.

```html
<div class="nio-heading nio-heading--secondary nio-heading--centered">the digital genie is out of the bottle</div>
```

<figure class="examples">
  <figcaption>Size Variants</figcaption>
  <div class="nio-heading nio-heading--secondary nio-heading--centered">the digital genie is out of the bottle</div>
</figure>

## inverted headings

For dark backgrounds, you can add the `.nio-heading--inverted` class to increase readability against dark backgrounds. Again, mixins are preferred over HTML classes.


```scss
[selector] {
  @extend .nio-heading, .nio-heading--primary, .nio-heading--inverted, .nio-heading--centered;
}
```

<figure class="examples examples--dark">
  <figcaption>Dark Background Headers</figcaption>
  <div class='nio-heading nio-heading--primary nio-heading--inverted nio-heading--centered'>Heading 1</div>
</figure>

