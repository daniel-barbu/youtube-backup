function scrollToLastVideo(){
	if(document.getElementById("spinner")!=null) window.scrollTo(0,document.getElementsByTagName("ytd-app")[0].scrollHeight);
	else {clearInterval(intervalVar); getLinks();}
} var intervalVar=setInterval(scrollToLastVideo,10);

function getLinks() {
	var str="", urlTemp="", i=0; noVideos=document.getElementsByTagName("ytd-grid-video-renderer").length;
	for (var x=noVideos-1; x>=0; x--) {i++; urlTemp=document.getElementsByTagName("ytd-grid-video-renderer")[x].childNodes[1].childNodes[0].childNodes[2].href;
                                                str+="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; for(var y=i.toString().length; y<noVideos.toString().length; y++) {str+="0"}; str+=i+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx|<br>"+
                                                /*titlu*/+"<br>"+
                                                /*vizionari, data*/+"<br>"+
                                                "----------------------------------------<br>"+
                                                /*descriere*/+"<br>";
                                          }
          document.write(str); document.body.style.fontFamily="Lucida Console, monospace";
}
