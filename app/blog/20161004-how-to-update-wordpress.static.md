---
title: How to update a WordPress Theme
author:  Jenny Knuth
posted: 20161004
summary:
  Steps to take to update and test a theme update in WordPress.
_options:
  layout: app/layouts/blog.static.hbs
---

## For the Developer:

Before updating a WordPress theme on a live site, follow these steps to update your local install and test:

Check for n.io-specific customizations in the .php files on the child theme. To do this, look at the existing .php file in the parent (e.g. Divi) theme and compare it to the same .php file in the child (e.g. nio) theme. Any changes in the child theme are customizations that may or may not still be needed. Evaluate these changes and make a patch with the customizations that are important to keep.

Download the latest version of the theme. Replace the parent theme in your local install with the new theme folder. Share this new folder with the dev team so they can update their local installs (unlike the child theme folder, the parent folder is not a github repo—alternatively devs can grab the most recent install from siteground…discuss…). This parent-theme folder will be the new base from which to compare future changes.

Make a new branch and update your child theme by replacing the child .php files with the up-to-date parent theme .php files and then adding the custom patch. It is a good idea to commit after updating each file.

At this point, you have refreshed your both your child .php files—they are no longer frozen in time—and your parent theme on your local install. Test it.

If there are new elements/classes/ids in the parent theme, styles may have broken. Some elements/classes/ids may be gone. Evaluate your scss files and update as needed. Use clear commit messages about what is being updated. You can include comments and TODOs in these commits that can be traced. Test again.

When it looks good (and maybe even better than before), remove comments and make a Pull Request to staging.

After review, merge with staging (for the n.io site, which does not share a DB with staging, would it be a good idea at this point to transfer the DB from n.io to staging.n.io to make sure it all matches?).

Test again. (Remember, for the n.io site, any changes to the DB on staging need to be saved and exported to the production site.)

Once tested thoroughly on staging (see below!), deploy to live. Be sure to transfer any layouts to live site as well. Consider creating a draft page with the new code and imported layout first. Check the draft page. Make sure the merge has gone through on siteground and, if necessary, that caches are cleared. Once the draft page is working, save the new layout. Go to the target page and save and clear the layout, then load the new, tested layout from the library. Voilá! New page!

## For the Tester:

Go to the staging site in incognito mode.

Open live site and compare side by side.

Choose a variety of devices/magnifications (start with the standard sizes and devices then look at extremes/edge cases). Tip: you can select different devices in Chrome Dev Tools.

For each device/magnification check:
- Headers
- Footers
- All pages
- Spacing
- Colors
- Typography
- Buttons
- Links
- Forms
- Videos

Try to break staging.

Note any discrepancies and make a punch list for the developer.
