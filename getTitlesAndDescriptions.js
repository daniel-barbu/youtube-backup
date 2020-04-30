function scrollToLastVideo(){
	if(document.getElementById("spinner")!=null) window.scrollTo(0,document.getElementsByTagName("ytd-app")[0].scrollHeight);
	else {clearInterval(intervalVar); getLinks();}
} var intervalVar=setInterval(scrollToLastVideo,10);

function getLinks() {
	var str="", urlTemp="", i=0; noVideos=document.getElementsByTagName("ytd-grid-video-renderer").length;
	var iFrame=document.createElement("iframe"); iFrame.id="iFrame"; document.body.appendChild(iFrame);
	for (var x=noVideos-1; x>=0; x--) {i++; iFrame.src=document.getElementsByTagName("ytd-grid-video-renderer")[x].childNodes[1].childNodes[0].childNodes[2].href;
					   //the page is loading...
                                                str+="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; for(var y=i.toString().length; y<noVideos.toString().length; y++) {str+="0"}; str+=i+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx|<br>"+
                                                document.getElementById("iFrame").contentWindow.document.getElementsByTagName("h1")[0].textContent+"<br>"+
                                                document.getElementById("iFrame").contentWindow.document.getElementsByClassName("view-count")[0].textContent+document.getElementById("iFrame").contentWindow.document.getElementById("date").textContent+"<br>"+
                                                "----------------------------------------<br>"+
                                                "descriere"+"<br>";
                                          }
	document.write(str); document.body.style.fontFamily="Lucida Console, monospace";
}
