var linkInput = document.getElementById("linkInput"),
    result = document.getElementById("result")

var timer;
var loading;

function setLoadingAnimation() {
  var chr;
  var n;
  loading = setInterval(function(){
	  n = Math.floor(Math.random() * 26) + 1
	  chr = String.fromCharCode(97 + n);
	  result.innerHTML = "<h3>" + chr + "</h3>"
  }, 10)
}

function clearLoadingAnimation() {
  clearInterval(loading);
}

function setTimer() {
  timer = setTimeout(function(){ getLink(linkInput.value) }, 500);
}

function clearTimer() {
  clearTimeout(timer);
}

linkInput.addEventListener("paste", async function(){
  setLoadingAnimation()
  clearTimer() 
  setTimer()
})
  
 function getLink(url) {
   
   if(url.startsWith("http")) {
       if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onload = function() {
      if (this.status == 200) {
        if(this.responseText != false) { clearLoadingAnimation(); drawLink(this.responseText) }
      }
    }
    xmlhttp.open("POST", "control/controller.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("getLink=" + url);
   }
 }
  
async function drawLink(url) {
  url = 'eeZee.link/' + url
  var urlLen = url.length
  var i;
  for (i = 0; i <= urlLen; i++) {
    var urlSub = url.substr(0, i);
    result.innerHTML = '<h3 class="linkResult" data-clipboard-text="' + url + '" style="cursor:pointer">' + urlSub + '<small><small id="copyText"> - click to copy</small></small></h3><small>link expires after 3 days</small>'
    await sleep(40)
  }
  
  
}
  
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var clipboard = new ClipboardJS('.linkResult');

clipboard.on('success', function(e) {
	console.log("Link Copied: " + e.text)
	document.getElementById("copyText").innerText = " - link copied";
	setTimeout(function() {
			document.getElementById("copyText").innerText = " - click to copy";
	},6000)
});
