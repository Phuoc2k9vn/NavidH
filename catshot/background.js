﻿// MAGBEI GAMES
// Launcher script for Chrome Apps in the Chrome Web Store.
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("index.html", {
		id: "mainWindow",
		state: "fullscreen"
	});
});