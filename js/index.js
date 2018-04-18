window.onload = function() {
	let userAgent = navigator.userAgent;
	let body = document.getElementsByTagName('body')[0];
	let topNav = document.getElementsByClassName("top-menu")[0];
	let ul = topNav.getElementsByTagName("ul")[0];
	let lis = ul.getElementsByTagName("li");
	if(userAgent.indexOf("Window") != -1) {
		for(let i = 0; i < lis.length; i++) {
			lis[i].onclick = function() {
				for(let j = 0; j < lis.length; j++) {
					lis[j].classList.remove("active");
				}
				lis[i].classList.add('active');
			}
		}
		window.addEventListener("scroll", function() {
			let scrollTop = document.documentElement.scrollTop;
			let topNav = document.getElementsByClassName("top-menu")[0];
			let ul = topNav.getElementsByTagName("ul")[0];
			let ulWidth = window.getComputedStyle(ul).width;
			if(scrollTop < 300) {
				ul.style.background = "rgba(51,51,51," + scrollTop * 0.0030 + ")";
				ul.classList.remove("active");
			} else {
				ul.style.background = "rgba(51,51,51," + 300 * 0.0030 + ")";
				ul.classList.add("active");
			}
		})
	} else {
		console.log("移动端");
		for(let i = 0; i < lis.length; i++) {
			lis[i].onclick = function() {
				for(let j = 0; j < lis.length; j++) {
					lis[j].classList.remove("active");
				}
				lis[i].classList.add('active');
			}
		}
	}
}