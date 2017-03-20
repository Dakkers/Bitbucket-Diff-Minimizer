chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "jquery-3.2.0.min.js"});
  chrome.tabs.executeScript(null, {file: "script.js"});
});
