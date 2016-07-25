---
title: n.io code
_options:
  layout: app/layouts/guide.static.hbs
---

The code style is used to represent pre-formatted, mono-spaced type, such as code.

## Code

<figure class="examples">
<figcaption>.nio-code</figcaption>
<div> Here is some text and <span class="nio-code">this is 'nio-code' in a span</span></div>
</figure>


```html
<div> Here is some text and <span class="nio-code">this is 'nio-code' in a span</span></div>
```
#### How it renders

#### Constants

`$font-mono` is used to set the font

`$color-faint` is used to set the background color

`$dist-thin` is used to set the border radius

`$dist-small` is used to set the padding

`$dist-hair` is used to set the border bottom width

`$color-light` is used to set the border bottom color

### Variants

* `--in-block`

Use for code in shaded boxes.

```html
<div class="nio-boxed nio-boxed--shaded"> Here is some text and
<span class="nio-code nio-code--in-block">this is an example of a span with the classes 'nio-code nio-code--in-block'</span></div>
```

<figure class="examples">
  <figcaption>.nio-code .nio-code--in-block</figcaption>
  <div class="nio-boxed nio-boxed--shaded">
    Here is some text in a shaded box and <span class="nio-code nio-code--in-block">this is an example of a span with the classes 'nio-code nio-code--in-block'</span>
  </div>
</figure>

## .nio-code-block

Use for larger blocks of code.

#### Sample code

```html
<div class="nio-code-block">this is a code block, the box is shaded and centered in the middle of the container</div>
```
#### How it renders
<div class="nio-code-block">this is a code block, the box is shaded and centered in the middle of the container</div>

#### Sample code

```html
<div class="nio-code nio-code-block">this is a code block with an added <span class="nio-code--in-block">.nio-code</span> class, the text renders as code</div>
```
#### How it renders:
<div class="nio-code nio-code-block">this is a code block with an added <span class="nio-code--in-block">.nio-code</span> class, the text renders as code</div>
