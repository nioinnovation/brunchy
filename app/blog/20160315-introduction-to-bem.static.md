---
title: Introduction to BEM
author:  James Holmes
posted: 20160315
summary:
  A quick overview of BEM, a CSS methodology that is used in the front-end for framework layers
  that helps provide structure, organization, and composability.
_options:
  layout: app/layouts/blog.static.hbs
---

[BEM](http://getbem.com/) &ndash; Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end

## what are the rules

BEM is ultimately a CSS naming convention that follows the following basic elements: `block__element--modifier`

* A `block` is a standalone entity that is meaningful on its own.
* An `element` parts of a block and have no standalone meaning, they are semantically tied to its block.
* A `modifier` is a flags on blocks or elements, they are used to change appearance or behavior.

## why is this a good idea?

From a CSS framework perspective, BEM provides:

* Isolation/Modularity &ndash; the ability to independently reason about the effects that CSS classes will have on an element.
* Reusability &ndash; Think about CSS as composing as a collection of blocks that can be resued/combined. Conceptually maps well to framework-level CSS guides.
* Reduced specifity &ndash; for frameworks-level CSS, this is a big deal. Blocks dont have sematic dependies on any parental structure/don't have cascading problems, and compiles/unrolls to low-specificity selectors that are easy to override in domain specific CSS.

## disambiguate modifiers

Let's say I have some CSS that looks like this:

```css
.header {
  font-size: 2rem;
  font-weight: bold;
}

.colorize {
  background-image: linear-gradient(0deg, red, orange, yellow, green, cyan, blue, violet);
}
```

Now, let's want an element that is both a header and colorized:

```html
<div class="header colorize"> <!-- content --> </div>
```

Everything is cool. However, let's consider a future iteration&mdash;a designer wants to expand the visual vocabulary&ndash;and wants to make a primary header, it might be tempting to make a conjoined CSS class:

```scss
.header {
  font-size: 2rem;
  font-weight: bold;
}

// Really big
.header.primary { font-size: 4rem; }
```

Meanwhile, another developer isn't keen on rainbows, and wants to make a colorize that only uses primary colors:

```scss
.colorize {
  background-image: linear-gradient(0deg, red, orange, yellow, green, cyan, blue, violet);
}

.colorize.primary {
  background-image: linear-gradient(0deg, red, red 33%, yellow 33%, yellow 66%, blue 66%, blue);
}
```

Now, how do we say we want a "Primary Heading" without saying that we want a "Primary Colorizer", or vice versa? <abbr title="Block Element Modifier">BEM</abbr> get's around this by contextualizing modifiers as being textually dependent on the thing they are modifying:

```scss
.header {
  font-size: 2rem;
  font-weight: bold;
}

.header--primary { font-size: 4rem; }

.colorize {
  background-image: linear-gradient(0deg, red, orange, yellow, green, cyan, blue, violet);
}

.colorize--primary {
  background-image: linear-gradient(0deg, red, red 33%, yellow 33%, yellow 66%, blue 66%, blue);
}
```

## Concerns about repetition

There are some concerns about the repetitive nature of BEM and its *impact* on the readability of the DOM. Borrowing from the example before:

```html
<div class="header header--primary colorize colorize--primary"> <!-- content --> </div>
```

However, using a CSS preprocessor&mdash;like SCSS or LESS&mdash;some of these concerns can be mitigated by using semantic classes that map to domain specific content:

```html
<div class="fresh-news"> <!-- content --> </div>
```

```scss
.fresh-news {
  @extend .header, .header--primary;
  @extend .colorize, .colorize--primary;
}
```

## Leveraging SCSS to make BEM easier to maintain

SCSS can also be leveraged to improve the maintainability of BEM by using the `&` selector:

```scss
.header {
  font-size: 2rem;
  font-weight: bold;

  &--primary { font-size: 4rem; }
}

.colorize {
  background-image: linear-gradient(0deg, red, orange, yellow, green, cyan, blue, violet);
  &--primary {
    background-image: linear-gradient(0deg, red, red 33%, yellow 33%, yellow 66%, blue 66%, blue);
  }
}
```

This helps with class isolation and also improves refactorability.
