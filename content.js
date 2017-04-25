// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" || request.message === "shortcut") {
			let a = chrome.extension.getURL("darkTheme.css");
            $('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("head");
        }
    }
);
