chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	var patt = /www.twitch.tv\/(?!(?:directory)\b)(?:[^\/]+)$/;
	// console.log(tabId + ' ' + tab.url + ' ' + patt.test(tab.url));
	if(patt.test(tab.url) && tab.status == 'complete'){
		chrome.tabs.sendMessage(tabId, {url:tab.url}, function(response) {
			// console.log(response.result);
		});
	}
});
