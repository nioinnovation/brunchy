---
title: n.io typography
_options:
  layout: app/layouts/guide.static.hbs
---

n.io SCSS is not opinionated about fonts. The default font is tied to the $font-sans variable. Specific fonts can be added in your project <here>.

## .nio-sans
The basic default font.

#### Sample code

```html
<div class="nio-sans">this is nio-sans</div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-sans</figcaption>
  <div class="nio-sans">this is nio-sans</div>
</figure>

#### Constants

`$font-sans` is used to set the font

## .nio-mono
The default mono-spaced font. Usually used for code.

#### Sample code

```html
<div class="nio-mono">this is nio-mono</div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-mono</figcaption>
  <div class="nio-mono">this is nio-mono</div>
</figure>

#### Constants

`$font-mono` is used to set the font

## .nio-emphasis
Use to emphasize text.

#### Sample code

```html
<div class="nio-emphasis">this is nio-emphasis</div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-emphasis</figcaption>
  <div class="nio-emphasis">this is nio-emphasis</div>
</figure>

## .nio-link
Use to indicate a clickable link.

#### Sample code

```html
<div> this is a div and <span class="nio-link">this is span with class nio-link</span></div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-link</figcaption>
  <div> this is a div and <span class="nio-link">this is span with class nio-link</span></div>
</figure>

#### Constants

`$color-link` is used to set the link color

## .nio-sscript
Scales the font down in size. 

#### Sample code

```html
<div> this is a div and <span class="nio-sscript">this is a span with class nio-sscript</span></div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-sscript</figcaption>
  <div> this is a div and <span class="nio-sscript">this is a span with class nio-sscript</span></div>
</figure>

### Variants

* `--super`

#### Sample code

```html
<div> this is a div and <span class="nio-sscript nio-sscript--super">this is a span with class nio-sscript and nio-sscript--super</span></div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-sscript--super</figcaption>
  <div> this is a div and <span class="nio-sscript nio-sscript--super">this is a span with class nio-sscript and nio-sscript--super</span></div>
</figure>

* `--sub`

#### Sample code

```html
<div> this is a div and <span class="nio-sscript nio-sscript--sub">this is a span with class nio-sscript and nio-sscript--sub</span></div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-sscript--sub</figcaption>
  <div> this is a div and <span class="nio-sscript nio-sscript--sub">this is a span with class nio-sscript and nio-sscript--sub</span></div>
</figure>
