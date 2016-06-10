---
title: n.io quotes
_options:
  layout: app/layouts/guide.static.hbs
---

You can create a quote using the [.nio-quote](#-nio-quote) class with one of its variants [.nio-quote--inline](#variants) or [.nio-quote--blockquote](#variants).

## .nio-quote

Defines the symbols used for quotes.

### Variants

#### `--inline`

#### Sample code

```html
<div class="nio-quote nio-quote--inline">this is an inline quote with classes `nio-quote` and `nio-quote--inline`</div>
```

#### How it renders
<figure class="examples">
  <figcaption>The Standard Header</figcaption>
  <div class="nio-quote nio-quote--inline">this is an in-line quote with classes `nio-quote` and `nio-quote--inline`</div>
</figure>

* `--blockquote`

#### Sample code
```html
<div class="nio-quote nio-quote--blockquote">block quote using <span class="nio-code nio-code--in-block">nio-quote</span> and <span class="nio-code nio-code--in-block">nio-quote--blockquote</span></div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-quote .nio-quote--blockquote</figcaption>
  <div class="nio-quote nio-quote--blockquote">block quote using <span class="nio-code nio-code--in-block">nio-quote</span> and <span class="nio-code nio-code--in-block">nio-quote--blockquote</span></div>
</figure>

#### Constants

`$font-line-height * 2rem` is used to set the margin top and padding

`$font-line-height * 1rem` is used to set the margin bottom

`$color-faint` is used to set the background color of the icon

`$color-light` is used to set the color of the icon
