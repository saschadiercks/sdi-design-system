// #### imports ####
import setJsAvailability from "./components/setJsAvailability.js";
import hamburgerState from "./components/hamburgerState.js";

import handleTriggers from "./functions/handleTriggers.js";
import clickOutside from "./functions/clickOutside.js";

// ####################
// ##### settings #####
// ####################

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// --- Toggle JS Availability
	setJsAvailability("html");

	// -- handle triggers
	handleTriggers('.sdi-flyout-trigger', hamburgerState);

	// -- listen or click outside
	clickOutside('.sdi-is-active');

});
