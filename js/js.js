
window.onload=function(){
	var music= document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	audio.addEventListener("ended",function(event){
		music.className="";
	},false);
	// music.onclick=function(){
	// 	if(audio.paused){
	// 		audio.play();
	// 		music.className="play";
	// 	}else{
	// 		audio.pause();
	// 		music.className="";
		    
	//     };
 //    };
    music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			music.className="play";
		}else{
			audio.pause();
			music.className=""; 
	    };
	},false);

	var page1= document.getElementById("page1");
	var page2= document.getElementById("page2");
	var page3= document.getElementById("page3");
	page1.addEventListener("touchstart",function(event){
	     page1.style.display="none";
	     setTimeout(function(){
		 page2.setAttribute("class","page fadeSlow");
		 page2.style.display="block";
	     page3.style.display="block";
	     page3.style.top="100%";
		 setTimeout(function(){
		 page2.setAttribute("class","page fadeOut");
		 page3.setAttribute("class","page fadeIn");
		},6000);
		},500);   
	},false);
	// page1.addEventListener("click",function(event){
	//      page1.style.display="none";
	//      setTimeout(function(){
	// 	 page2.setAttribute("class","page fadeSlow");
	// 	 page2.style.display="block";
	//      page3.style.display="block";
	//      page3.style.top="100%";
	// 	 setTimeout(function(){
	// 	 page2.setAttribute("class","page fadeOut");
	// 	 page3.setAttribute("class","page fadeIn");
	// 	},6000);
	// 	},500);   
	// },false);



};

