---
title: How to do a local WordPress install
author:  Jenny Knuth
posted: 20161003
summary:
  installing and configuring a local version of a WordPress site so you can view changes locally before pushing
_options:
  layout: app/layouts/blog.static.hbs
---

To work on a WordPress site locally, you will do a complete WordPress install in a directory on your local machine that is pointing to the hosted database (most likely the staging database). After your install is set up, the only places you will make changes will be in your plugins directory or your themes directory. Your working plugins and themes should be github repos with version control.

Follow these simple steps:

1. Download correct version of WordPress from [https://wordpress.org/download/](https://wordpress.org/download/). The 'correct' version of WordPress is the version on the live site and is visible in the lower right corner of the live site's Dashboard page.

2. Get database connection settings and table prefix from staging siteground `wp-config.php` file. Add these settings to your local `wp-config.php`. Use `109.73.238.100` for `DB_HOST`.

3. Change `wp-includes/option.php` by adding the following conditional to the `get_option` method:

```php
if ($option == 'siteurl' || $option == 'home') {
	// Replace this URL with however you will access the site locally
	return 'http://127.0.0.1:8888/mysite';
}
```

While you are in `wp-includes/option.php`, near the bottom, you might want to also set `WP_DEBUG` to `true` in order to get more descriptive error messages.

4. In `wp-content/plugins` clone down your plugins. You might get these from nioinnovation or from siteground. For example:
```
git clone git@github.com:nioinnovation/wordpress.git nio_streams
```

5. In `wp-content/themes` download and install the desired version of any standard theme (e.g., Divi), and/or clone down any custom themes. For example:
```
git clone git@github.com:niomedia/theme-framework.git -b parent-theme nio-parent-theme
```
```
git clone git@github.com:niomedia/theme-framework.git -b child-theme nio-child-theme
```

To view your site: run a PHP server from your install, make sure your theme repo is on the correct branch, and navigate to your site's server port in the browser. Check the console for errors.

Work flow:

- Login to your live staging site to make changes to the database (content, etc.).
- Edit and build your theme or plugin changes locally then view them on your local site—which is set up to include changes from the database.
- It is NOT a good idea to login to your local WordPress site (via `localhost:.../wp-admin`), and this is almost never necessary.
