window.onscroll=function(){
	let scrollTop=document.documentElement.scrollTop;
	let topNav=document.getElementsByClassName("top-menu")[0];
	let ul=topNav.getElementsByTagName("ul")[0];
	let ulWidth=window.getComputedStyle(ul).width;
	console.log(ulWidth);
	if(scrollTop<300){
		ul.style.background="rgba(51,51,51,"+scrollTop*0.0030+")";
		ul.classList.remove("active");
	}else{
		ul.style.background="rgba(51,51,51,"+300*0.0030+")";
		ul.classList.add("active");
	}
}
