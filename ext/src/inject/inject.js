//$(document).ready(function() {
	console.log("Hello. This message was sent from scripts/inject.js");
	
	// chrome.browserAction.onClicked.addListener(function(tab) {
 //  		chrome.tabs.executeScript({
 //    		code: 'document.body.style.backgroundColor="red"'
 //  			});
	// });
	// var s = document.createElement('script');
	// s.src = chrome.extension.getURL("browser_action.js");


	// chrome.extension.onRequest.addEventListener("click", function(request, sender, sendResponse){
		
	// 	if(request.colorName == yellow){
	// 		background-color : yellow;
	// 	}
	// 	else if(request.colorName == "blue"){
	// 		background-color : blue;
	// 	}
	// 	chrome.runtime.sendMessage({greeting: "hello"}, function(response){
	// 		"backgroundcolor" : background-color,
	// 	});

	// });

	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    // console.log(sender.tab ?
	    //             "from a content script:" + sender.tab.url :
	    //             "from the extension");
	    if (color = request.changeColor) {
	    	console.log(color);
	    }
	     // sendResponse({farewell: "goodbye"});
	  });

 //} );