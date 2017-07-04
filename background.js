chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	var patt = /www.twitch.tv\/([^\/]+)$/;
	// console.log(tabId + ' ' + tab.url + ' ' + patt.test(tab.url));
	if(patt.test(tab.url) && tab.status == 'complete'){
		chrome.tabs.sendMessage(tabId, {updated: true, url:tab.url}, function(response) {
			// console.log(response.farewell);
		});
	}
});
