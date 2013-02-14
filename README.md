[![Build Status](https://travis-ci.org/JamesMGreene/jquery.multiclick.png)](https://travis-ci.org/JamesMGreene/jquery.multiclick)

# jquery.multiclick

Bind to the `multiclick` event, a custom DOM-like event generated using jQuery's Special Events API.
The `multiclick` event triggers when the user clicks within the bound element a configurable number of times.

Have you ever wished that browsers threw an event when a user clicked an element a certain number of times?
_(No? OK, me neither... but this made for a good demonstration.)_
If you are [or can be] using jQuery 1.7+, then this simple jQuery extension can grant that wish for you!

## Getting Started
Check the [jQuery Plugins Registry](http://plugins.jquery.com/multiclick/) for the latest published version of this plugin!

You can also download the [production version][min] or the [development version][max] from GitHub.

[min]: https://raw.github.com/JamesMGreene/jquery.multiclick/master/dist/multiclick.min.js
[max]: https://raw.github.com/JamesMGreene/jquery.multiclick/master/dist/multiclick.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.multiclick.min.js"></script>
<script>
    jQuery(selector).on("multiclick", { clicks: 3 }, callbackFunc);
</script>
```

## Examples
```js
// click, click, click, multiclick
jQuery(selector).on("multiclick", { clicks: 3 }, callbackFunc);
// click, click, click, click, click, multiclick
jQuery(selector).on("multiclick", { clicks: 5 }, callbackFunc);
```

## Compatibility
**Works 100% with jQuery versions:**  
 - 1.7.x
 - 1.8.x
 - 1.9.x

**Untested jQuery versions:**  
 - Anything below 1.7.x (incompatible jQuery Special Events API)
 - 2.0.0b1

## Documentation
_(Coming soon)_

## Release History
 - 0.5.1: Published to the jQuery Plugins Registry on 2013-02-14.
     - Initial release, plus filename updates.