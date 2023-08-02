const ScrollSensitivity = 130;
const Pages = ["IndexPage", "AboutMePage", "EducationPage", "PortfolioPage", "ExperiencePage"];

var LastScrollTime = Date.now();
var NewScrollTime = Date.now();
var IsScrolling = false;
var Page;

window.onload = function() {
	FixStuff();
	Page = Math.round(window.scrollY / window.innerHeight) + 1;
}

window.addEventListener("wheel", ScrollStart, {passive: false});

document.onscrollend = (event) => {
	ScrollEnd();
	IsScrolling = false;
};

addEventListener("resize", (event) => {
	GotoPage(Page, true);
	FixStuff();
});

if (navigator.userAgent.includes("Chrome")) {
	console.log("Chrome");
} else if (navigator.userAgent.includes("Mozilla")) {
	console.log("Mozilla");
} else if (navigator.userAgent.includes("Safari")) {
	console.log("Safari");
}