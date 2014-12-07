// function yellow(){
// 	chrome.extension.sendRequest({
// 		"colorName": "yellow"
// 	});
// }

// function blue(){
// 	chrome.extension.sendRequest({
// 		"colorName": "blue"
// 	});
// }

function click(e){
	sendMessage(e.target.id);
//	chrome.tabs.executeScript(null,
//      {code:"document.body.p.backgroundColor='" + e.target.id + "'"});
  //  window.close();
};

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }//adding listeners to all the buttons
});

function sendMessage(color) {

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {changeColor: color}, function(response) {
	    console.log(response.farewell);
	  });
	});
}