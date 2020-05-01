function scrollToLastVideo(){
	window.scrollTo(0,document.getElementsByTagName("ytd-app")[0].scrollHeight);
	if(document.getElementById("spinner")==null) {clearInterval(intervalVar); getLinks();}
} var intervalVar=setInterval(scrollToLastVideo,10);

var str="";
function getLinks() {
	var noVideos=document.getElementsByTagName("ytd-grid-video-renderer").length, x=noVideos-1, i=1, dly=5;
	var iFrame=document.createElement("iframe"); iFrame.id="iFrame"; document.body.appendChild(iFrame);
	iFrame.src=document.getElementsByTagName("ytd-grid-video-renderer")[x].childNodes[1].childNodes[0].childNodes[2].href;
	function getTitlesAndDescriptions() {
		str+="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; for(var y=i.toString().length; y<noVideos.toString().length; y++) {str+="0"}; str+=i+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx|<br>"+
		document.getElementById("iFrame").contentWindow.document.getElementsByTagName("h1")[0].textContent+"<br>"+
		document.getElementById("iFrame").contentWindow.document.getElementsByClassName("view-count")[0].textContent+document.getElementById("iFrame").contentWindow.document.getElementById("date").textContent+"<br>"+
		"----------------------------------------<br>"+
		document.getElementById("iFrame").contentWindow.document.getElementById("description").textContent.replace(/(?:\r\n|\r|\n)/g,"<br>")+"<br>";
		console.log("Finished video "+i+"/"+noVideos+". ["+(noVideos-i)*dly*1.3+"sec left]");
		if (x==0) {clearInterval(intervalVar); display();}
		x--; i++;
		iFrame.src=document.getElementsByTagName("ytd-grid-video-renderer")[x].childNodes[1].childNodes[0].childNodes[2].href;
	} var intervalVar=setInterval(getTitlesAndDescriptions,dly*1000);
	
}

function display() {document.write(str); document.body.style.fontFamily="Lucida Console, monospace";}
