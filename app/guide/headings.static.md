---
title: n.io headings
_options:
  layout: app/layouts/guide.static.hbs
---

You can create a primary heading using the `.nio-heading` class; this base header has a font size of `$text-size-normal`.

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

<figure class="examples">
  <figcaption>Size Variants</figcaption>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</figure>


You can use it directly on an HTML element as the following:

```
<div class="nio-heading nio-heading--primary">
  Primary Heading
</div>
```

However, it is preferred to mix this helper into a specific selector with SCSS.
```
[selector] {
  @extend .nio-heading, .nio-heading--primary;
}
```

## inverted headings

For dark backgrounds, you can add the `.nio-heading--inverted` class to increase readability against dark backgrounds. Again, mixins are preferred over HTML classes.

<figure class="examples examples--dark">
  <figcaption>Dark Background Headers</figcaption>
  <h1 class='nio-heading--inverted'>Heading 1</h1>
  <h2 class='nio-heading--inverted'>Heading 2</h2>
  <h3 class='nio-heading--inverted'>Heading 3</h3>
  <h4 class='nio-heading--inverted'>Heading 4</h4>
  <h5 class='nio-heading--inverted'>Heading 5</h5>
  <h6 class='nio-heading--inverted'>Heading 6</h6>
</figure>

```
[selector] {
  @extend .nio-heading, .nio-heading--primary, .nio-heading--inverted;
}
```

