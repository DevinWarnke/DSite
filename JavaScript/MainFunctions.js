function GotoPage(PageNumber, Override) {
	PageNumber = Math.min(Math.max(PageNumber, 1), 5);
	
	if (Override) {
		IsScrolling = false;
		document.getElementById(Pages[PageNumber-1]).scrollIntoView({behavior: "instant", inline: "center"})
	} else if (Page != PageNumber) {
		IsScrolling = true;
		document.getElementById(Pages[PageNumber-1]).scrollIntoView({behavior: "smooth", inline: "center"})
	} else {
		IsScrolling = false;
	}
}

function ScrollStart(Wheel) {
	NewScrollTime = Date.now();
	
	if (!Wheel) {
		return false;
	} else {
		Wheel.preventDefault(Wheel);
		Wheel.stopPropagation(Wheel);
		Wheel.stopImmediatePropagation(Wheel);
	}
	
	if ((NewScrollTime - LastScrollTime) < ScrollSensitivity) {
		return false;
	}
	
	if (IsScrolling == true) {
		return false;
	}
	
	IsScrolling = true;
	
	if (Wheel.deltaY < 0) {
		GotoPage(Page - 1);
	} else {
		GotoPage(Page + 1);
	}
	
	LastScrollTime = Date.now();
	
    return false;
}

function ScrollEnd() {
	Page = Math.min(Math.max(Math.round(window.scrollY / innerHeight) + 1, 1), 5);
}