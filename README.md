## jquery.multiclick
jquery.multiclick is a jQuery plugin that creates a bindable special event for a configurable number of clicks: "multiclick"

Have you ever wished that browsers threw an event when a user clicked an element a certain number of times?
_(No? OK, me neither... but this made for a good demonstration.)_
If you are [or can be] using jQuery 1.7+, then this simple jQuery extension can grant that wish for you!


### Usage
```javascript
jQuery(selector).on("multiclick", { clicks: # }, callbackFunc);
```


### Dependencies
* jQuery 1.7+


### More?
See the [project pages][1] for additional information, demos, and tests.


### References
#### New API (jQuery 1.7+):
* [**@dmethvin**][8]'s [slides regarding "the Great jQuery Event System Refactor of 1.7"][2]
* [UNPUBLISHED official documentation for jQuery special events][3], courtesy of [**@dmethvin**][8]
	_Note:_ This documentation is unpublished because the API is still being finalized.
* [jQuery Mobile's Events][4]

#### Old API (jQuery 1.2, jQuery 1.3, jQuery 1.4-1.6) — only used during research:
* [**@cowboy**][9]'s [in-depth blog post about jQuery special events][5]
* [**@brandonaaron**][10]'s [blog post about jQuery special events][6]
* [**@brandonaaron**][10]'s [jquery.mousewheel event GitHub repo][7]


[1]: http://jamesmgreene.github.com/jquery.multiclick/
[2]: http://www.slideshare.net/dmethvin/jquery-17-events
[3]: https://docs.google.com/document/d/11rRFvC51lDU8SBqgcsR5XwVKUeW__RO643iXSEVOdQ4/edit
[4]: https://github.com/jquery/jquery-mobile/blob/master/js/jquery.mobile.event.js
[5]: http://benalman.com/news/2010/03/jquery-special-events/
[6]: http://brandonaaron.net/blog/2009/03/26/special-events
[7]: https://github.com/brandonaaron/jquery-mousewheel/
[8]: https://github.com/dmethvin/
[9]: https://github.com/cowboy/
[10]: https://github.com/brandonaaron/