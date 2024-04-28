let currentScroll = 0;
let isScrollDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap
.to(".marquee__part",{
	xPercent: -100,
	repeat: -1,
	duration: 5,
	ease: "linear",
}).totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50});

window.addEventListener("scroll", function(){
	if(window.pageYOffset > currentScroll){
		isScrollDown = true;
	} else {
		isScrollDown = false;
	}

	gsap.to(tween, {
		timescale: isScrollDown ? 1: -1;
	})

	arrows.forEach((arrow) => {
		if(isScrollDown) {
			arrow.classList.remove("active");
		} else{
			arrow.ClassList.add("active");
		}
	}) currentScroll = window.pageYOffset;
});

