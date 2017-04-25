chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.commands.onCommand.addListener(function(command) {
    if (command.name == "_execute_browser_action"){
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "shortcut"});        
    }
});