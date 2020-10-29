var linkInput = document.getElementById("linkInput"),
    result = document.getElementById("result")

var timer;
var loading;

function setLoadingAnimation() {
  var chr1;
  var chr2;
  var chr3;
  var chr4;
  var chr5;
  var chr6;
  var chr7;
  var n;
  loading = setInterval(function(){
	  chr1 = Math.floor(Math.random() * 26) + 1
	  chr1 = String.fromCharCode(97 + chr1)
	  chr2 = Math.floor(Math.random() * 26) + 1
	  chr2 = String.fromCharCode(97 + chr2)
	  chr3 = Math.floor(Math.random() * 26) + 1
	  chr3 = String.fromCharCode(97 + chr3)
	  chr4 = Math.floor(Math.random() * 26) + 1
	  chr4 = String.fromCharCode(97 + chr4)
	  chr5 = Math.floor(Math.random() * 26) + 1
	  chr5 = String.fromCharCode(97 + chr5)
	  result.innerHTML = "<h3>eeZee.link/" + chr1 + chr2 + chr3 + chr4 + chr5 + "</h3>"
  }, 25)
}

function clearLoadingAnimation() {
  clearInterval(loading);
}

function setTimer() {
  timer = setTimeout(function(){ getLink(linkInput.value) }, 300);
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
  var urlLen = url.length
  var i;
  for (i = 0; i <= urlLen; i++) {
    var urlSub = url.substr(0, i);
    result.innerHTML = '<h3 class="linkResult" data-clipboard-text="eeZee.link/' + url + '" style="cursor:pointer">eeZee.link/' + urlSub + '<small><small id="copyText"> - click to copy</small></small></h3><small>link expires 4 weeks after last use</small>'
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
