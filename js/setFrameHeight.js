/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name setFrameHeight
		 * @since 2017-12-06
		 * @param {element} element
		 */
		window.setFrameHeight = function(element) {
			try {
				element.height = element.contentWindow.document.documentElement.scrollHeight;
			}catch(e) {
				//throw e;
			}
		};
	})();
}catch(e) {
	console.error(e);
}