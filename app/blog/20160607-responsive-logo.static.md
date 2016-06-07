---
title: How to make a responsive, dynamic logo
author:  Jenny Knuth
posted: 20160607
summary:
  How to style a header with different logo sizes so the logo always looks crisp.
_options:
  layout: app/layouts/blog.static.hbs
---

A favorite header style for n.io sites shows a standard logo size on landing
and then, on scroll, a smaller logo image that scales out of the way. Here is a quick and simple
technique to ensure that the displayed logo is always at the best scale and resolution.

The basic strategy is to use the `background-image` attribute in CSS. You can
easily change out this background image for different classes (e.g., a regular header class versus a 'sticky,' 'fixed,' or 'static' class when scrolled) or for different media queries (i.e., check for resolution and pixel density).

The trick (and the slightly hacky part—this won't work for printing for example) is to place this background image on an `<img>` tag that contains a blank, transparent PNG. This placeholder PNG should have the same width-to-height ratio as the various logo images (which should also all have the same width-to-height ratio).

For example, to display a larger size, a smaller size, and 2x resolution you will need four logo files:

- logo_standard.png
- logo_mini.png
- logo_standard@2x.png
- logo_mini@2x.png

Grab the element that is your image tag. Some sample code for your SCSS with the standard size, the smaller 'fixed' or 'sticky' size, and the media query for retina (2x) resolution/pixel-ratio for both of those might look like this:

```
#logo {
	position: relative;
	background-image: url('./images/logo_standard.png');
	background-size: contain;
	background-repeat: no-repeat;

	.et-fixed-header & {
		background-image: url('./images/logo_mini.png');
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2),
		     only screen and ( min-resolution: 192dpi),
		     only screen and ( min-resolution: 2dppx) {
		background-image: url('./images/logo_standard@2x.png');

		.et-fixed-header & {
			background-image: url('./images/logo_mini@2x.png');
		}
	}
}
```
You simply change out the path to the background image for each situation. Happy header-ing!
