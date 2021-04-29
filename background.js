chrome.browserAction.onClicked.addListener(function(tab)
{
    chrome.tabs.create({ url: "edge://settings/passwords" });
});