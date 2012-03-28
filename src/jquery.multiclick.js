/**
 * jquery.multiclick jQuery Custom Event v0.1
 * http://jamesmgreene.github.com/jquery.multiclick/
 *
 * Copyright © 2012: James Greene (Team Gunmetal, Inc.)
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.event.special.multiclick = {
		delegateType: "click",
		bindType: "click",
		
		/**
		* Invoked each time the associated events (i.e. "click") are triggered.
		* This function is basically a pre-condition checker: it is responsible
		* for determining if the registered event handler should be invoked. 
		*/
		handle: function($event) {
			var handleObj = $event.handleObj,
				targetData = jQuery.data(this),
				$eventData = $event.data || {},
				result;

			// If this click number is a divisor/multiple of the desired click count, run the handler
			targetData.clicks = (targetData.clicks || 0) + 1;
			if (targetData.clicks % $eventData.clicks === 0) {
				$event.type = handleObj.origType;
				result = handleObj.handler.apply(this, arguments);
				$event.type = handleObj.type;
			}
			return result;
		}
	};
})(jQuery);