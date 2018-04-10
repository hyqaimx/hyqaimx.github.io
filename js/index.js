// window.onscroll=function(){
// 	let scrollTop=document.documentElement.scrollTop;
// 	let topNav=document.getElementsByClassName("top-menu")[0];
// 	let ul=topNav.getElementsByTagName("ul")[0];
// 	let ulWidth=window.getComputedStyle(ul).width;
// 	if(scrollTop<300){
// 		ul.style.background="rgba(51,51,51,"+scrollTop*0.0030+")";
// 		ul.classList.remove("active");
// 	}else{
// 		ul.style.background="rgba(51,51,51,"+300*0.0030+")";
// 		ul.classList.add("active");
// 	}
// }
window.onload = function() {
    let type = navigator.userAgent.toLowerCase();
    let topNav = document.getElementsByClassName("top-menu")[0];
    let ul = topNav.getElementsByTagName("ul")[0];
    let lis = ul.getElementsByTagName("li");
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].tap = function() {
                for (let j = 0; j < lis.length; j++) {
                    lis[j].classList.remove("active");
                }
                lis[i].classList.add('active');
            }
        }
    } else {
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function() {
                for (let j = 0; j < lis.length; j++) {
                    lis[j].classList.remove("active");
                }
                lis[i].classList.add('active');
            }
        }
    }
    this.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop;
        let topNav = document.getElementsByClassName("top-menu")[0];
        let ul = topNav.getElementsByTagName("ul")[0];
        let ulWidth = window.getComputedStyle(ul).width;
        if (scrollTop < 300) {
            ul.style.background = "rgba(51,51,51," + scrollTop * 0.0030 + ")";
            ul.classList.remove("active");
        } else {
            ul.style.background = "rgba(51,51,51," + 300 * 0.0030 + ")";
            ul.classList.add("active");
        }
    }
}