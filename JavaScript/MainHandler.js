const ScrollSensitivity = 130;
const Pages = ["IndexPage", "AboutMePage", "EducationPage", "PortfolioPage", "ExperiencePage"];

var LastScrollTime = Date.now();
var NewScrollTime = Date.now();
var IsScrolling = false;
var Page;

window.onload = function() {
	FixStuff();
	Page = Math.min(Math.max(Math.round(window.scrollY / innerHeight) + 1, 1), 5);
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