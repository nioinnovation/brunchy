---
title: n.io quotes
_options:
  layout: app/layouts/guide.static.hbs
---

Set up a n.io grid with a [.nio-grid](#-nio-grid) div. Each grid row is made up of [.nio-grid__column](#-nio-grid__column) and a [variant](#variants) class, where the desired number of columns to span is the number specified in the variant.

## .nio-grid
Sets up a flexbox grid with a flex-direction of row.

## .nio-grid__column
Sets up responsive column widths.   

### Variants

* `--n` where `n` is the number of columns (out of constant $nio-grid-columns—see below) to fill

#### Sample code

```html
<div class="nio-grid">
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
  <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
  <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
  <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
  <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
  <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
  <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
  <div class="nio-grid__column nio-grid__column--6" style="border: 0.5px solid lightgray;">six</div>
  <div class="nio-grid__column nio-grid__column--6" style="border: 0.5px solid lightgray;">six</div>
  <div class="nio-grid__column nio-grid__column--7" style="border: 0.5px solid lightgray;">seven</div>
  <div class="nio-grid__column nio-grid__column--5" style="border: 0.5px solid lightgray;">five</div>
  <div class="nio-grid__column nio-grid__column--8" style="border: 0.5px solid lightgray;">eight</div>
  <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
  <div class="nio-grid__column nio-grid__column--9" style="border: 0.5px solid lightgray;">nine</div>
  <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
  <div class="nio-grid__column nio-grid__column--10" style="border: 0.5px solid lightgray;">ten</div>
  <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
  <div class="nio-grid__column nio-grid__column--11" style="border: 0.5px solid lightgray;">eleven</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--12" style="border: 0.5px solid lightgray;">twelve</div>
<div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-grid</figcaption>
  <div class="nio-grid">
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
    <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
    <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
    <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
    <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
    <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
    <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
    <div class="nio-grid__column nio-grid__column--6" style="border: 0.5px solid lightgray;">six</div>
    <div class="nio-grid__column nio-grid__column--6" style="border: 0.5px solid lightgray;">six</div>
    <div class="nio-grid__column nio-grid__column--7" style="border: 0.5px solid lightgray;">seven</div>
    <div class="nio-grid__column nio-grid__column--5" style="border: 0.5px solid lightgray;">five</div>
    <div class="nio-grid__column nio-grid__column--8" style="border: 0.5px solid lightgray;">eight</div>
    <div class="nio-grid__column nio-grid__column--4" style="border: 0.5px solid lightgray;">four</div>
    <div class="nio-grid__column nio-grid__column--9" style="border: 0.5px solid lightgray;">nine</div>
    <div class="nio-grid__column nio-grid__column--3" style="border: 0.5px solid lightgray;">three</div>
    <div class="nio-grid__column nio-grid__column--10" style="border: 0.5px solid lightgray;">ten</div>
    <div class="nio-grid__column nio-grid__column--2" style="border: 0.5px solid lightgray;">two</div>
    <div class="nio-grid__column nio-grid__column--11" style="border: 0.5px solid lightgray;">eleven</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--12" style="border: 0.5px solid lightgray;">twelve</div>
  <div>
</figure>

* `--n-before` adds a left margin equal to a column of width `n`

#### Sample code

```html
<div class="nio-grid">
  <div class="nio-grid__column nio-grid__column--1-before" style="border: 0.5px solid orange;">one, with margin before</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
<div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-grid</figcaption>
  <div class="nio-grid">
  <div class="nio-grid__column nio-grid__column--1-before" style="border: 0.5px solid orange;">one, with margin before</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div>
</figure>

* `--n-after` adds a right margin equal to a column of width `n`

#### Sample code

```html
<div class="nio-grid">
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
  <div class="nio-grid__column nio-grid__column--1-after" style="border: 0.5px solid orange;">one, with margin after</div>

<div>
```

#### How it renders
<figure class="examples">
  <figcaption>.nio-grid</figcaption>
  <div class="nio-grid">
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1" style="border: 0.5px solid lightgray;">one</div>
    <div class="nio-grid__column nio-grid__column--1-after" style="border: 0.5px solid orange;">one, with margin after</div>
  <div>
</figure>

#### Constants

`$nio-grid-columns` is used to set the number of grid columns. The default number of grid columns is 12.
