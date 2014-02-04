'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}

function signInBtn(e) {
	window.location.href="signIn";
}

function newUserBtn(e) {
	console.log("clicked newuser");
	window.location.href="newUser";
}
