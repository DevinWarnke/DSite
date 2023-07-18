function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

var Device = "Desktop";

if (navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i)) {
	Device = "Phone";
}

if (navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/KFAPWI/i) ||
	navigator.userAgent.match(/Nexus/i)) {
	Device = "Tablet";
}

function PhoneVertical() {
	// alert("Phone vertical.");
	waitForElementToExist(".Header").then(element => {
		const Elements = document.querySelectorAll(".Header");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "9vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "15vh";
		});
	});
	
	waitForElementToExist(".EducationBox").then(element => {
		Elements = document.querySelectorAll(".EducationBox");
		
		Elements.forEach(Element => {
			Element.style.width = "80vw";
			Element.style.height = "60vh";
			Element.style.left = "10vw";
			Element.style.top = "20vh";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".SchoolData").then(element => {
		Elements = document.querySelectorAll(".SchoolData");
		
		Elements.forEach(Element => {
			Element.style.height = "40%";
			Element.style.width = "50%";
			Element.style.border = "0.55vw solid #595B70DD";
			Element.style.borderradius = "3vw";
			Element.style.margin = "-0.275vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#TVCC").then(element => {
		Elements = document.querySelectorAll("#TVCC");
		
		Elements.forEach(Element => {
			Element.style.top = "52%";
			Element.style.left = "25%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#UTTyler").then(element => {
		Elements = document.querySelectorAll("#UTTyler");
		
		Elements.forEach(Element => {
			Element.style.top = "7%";
			Element.style.left = "25%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#SchoolName").then(element => {
		Elements = document.querySelectorAll("#SchoolName");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "6vw";
			Element.style.top = "0.8%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#SchoolDate").then(element => {
		Elements = document.querySelectorAll("#SchoolDate");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "4vw";
			Element.style.top = "1.9%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#SchoolGPA").then(element => {
		Elements = document.querySelectorAll("#SchoolGPA");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "4vw";
			Element.style.top = "3.2%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#SchoolEducation").then(element => {
		Elements = document.querySelectorAll("#SchoolEducation");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "4vw";
			Element.style.top = "3.8%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ContactInfoEntry").then(element => {
		Elements = document.querySelectorAll(".ContactInfoEntry");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "2.5vw";
			Element.style.width = "48%";
			Element.style.height = "2.2em";
			Element.style.top = "1%";
			Element.style.left = "52%";
			Element.style.backgroundColor = "RGBA(255, 0, 0, 0)";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Phone").then(element => {
		Elements = document.querySelectorAll("#Phone");
		
		Elements.forEach(Element => {
			Element.style.width = "48%";
			Element.style.height = "2.2em";
			Element.style.top = "6.2%";
			Element.style.left = "52%";
			Element.innerHTML = "Phone:<br>903-904-2077";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Email").then(element => {
		Elements = document.querySelectorAll("#Email");
		
		Elements.forEach(Element => {
			Element.style.width = "48%";
			Element.style.height = "2.2em";
			Element.style.top = "11%";
			Element.style.left = "52%";
			Element.innerHTML = "Email:<br>warnkedevin@yahoo.com";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".Portrait").then(element => {
		Elements = document.querySelectorAll(".Portrait");
		
		Elements.forEach(Element => {
			Element.style.width = "50%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".Button").then(element => {
		Elements = document.querySelectorAll(".Button");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "6vw";
			Element.style.width = "16vw";
			Element.style.height = "1.5em";
			Element.style.top = "1vh";
			Element.style.border = "0.55vw solid #64516DDD";
		});
	});
	
	waitForElementToExist("#HomeIcon").then(element => {
		Elements = document.querySelectorAll("#HomeIcon");
		
		Elements.forEach(Element => {

		});
	});
	
	waitForElementToExist("#LeftArrow").then(element => {
		Elements = document.querySelectorAll("#LeftArrow");
		
		Elements.forEach(Element => {

		});
	});
	
	waitForElementToExist("#RightArrow").then(element => {
		Elements = document.querySelectorAll("#RightArrow");
		
		Elements.forEach(Element => {
			
		});
	});
	
	waitForElementToExist("#Home").then(element => {
		Elements = document.querySelectorAll("#Home");
		
		Elements.forEach(Element => {
			Element.style.right = "unset";
			Element.style.left = "4vw";
		});
	});
	
	waitForElementToExist("#Back").then(element => {
		Elements = document.querySelectorAll("#Back");
		
		Elements.forEach(Element => {
			Element.style.right = "24vw";
			Element.style.left = "unset";
		});
	});
	
	waitForElementToExist("#Next").then(element => {
		Elements = document.querySelectorAll("#Next");
		
		Elements.forEach(Element => {
			Element.style.right = "4vw";
			Element.style.left = "unset";
		});
	});
}

function PhoneHorizontal() {
	alert("Phone horizontal.");
	waitForElementToExist(".Header").then(element => {
		const Elements = document.querySelectorAll(".Header");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "8vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "18vh";
			Element.style.height = "0.65em";
			Element.style.lineHeight = "50%";
		});
	});
	
	waitForElementToExist(".ButtonContainer").then(element => {
		Elements = document.querySelectorAll(".ButtonContainer");
		
		Elements.forEach(Element => {
			Element.style.top = "65vh";
			Element.style.left = "10%";
			Element.style.height = "2em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist(".MainButton").then(element => {
		Elements = document.querySelectorAll(".MainButton");
		
		Elements.forEach(Element => {
			Element.style.width = "32.5vw";
			Element.style.fontSize = "3vw";
			Element.style.height = "2.2em";
			Element.style.color = "transparent";
			Element.style.border = "0px";
			Element.style.backgroundColor = "transparent";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#HomeIcon").then(element => {
		Elements = document.querySelectorAll("#HomeIcon");
		
		Elements.forEach(Element => {
			Element.style.fill = "green";
		});
	});
	
	waitForElementToExist("#LeftArrow").then(element => {
		Elements = document.querySelectorAll("#LeftArrow");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#RightArrow").then(element => {
		Elements = document.querySelectorAll("#RightArrow");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#AboutMe").then(element => {
		Elements = document.querySelectorAll("#AboutMe");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Education").then(element => {
		Elements = document.querySelectorAll("#Education");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist("#Portfolio").then(element => {
		Elements = document.querySelectorAll("#Portfolio");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Experience").then(element => {
		Elements = document.querySelectorAll("#Experience");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}

function TabletVertical() {
	alert("Tablet vertical.");
	waitForElementToExist(".Header").then(element => {
		const Elements = document.querySelectorAll(".Header");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "11vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "25vh";
		});
	});
	
	waitForElementToExist(".ButtonContainer").then(element => {
		Elements = document.querySelectorAll(".ButtonContainer");
		
		Elements.forEach(Element => {
			Element.style.top = "50vh";
			Element.style.left = "10%";
			Element.style.height = "4em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist(".MainButton").then(element => {
		Elements = document.querySelectorAll(".MainButton");
		
		Elements.forEach(Element => {
			Element.style.width = "32.5vw";
			Element.style.fontSize = "5vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#AboutMe").then(element => {
		Elements = document.querySelectorAll("#AboutMe");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Education").then(element => {
		Elements = document.querySelectorAll("#Education");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist("#Portfolio").then(element => {
		Elements = document.querySelectorAll("#Portfolio");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Experience").then(element => {
		Elements = document.querySelectorAll("#Experience");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}

function TabletHorizontal() {
	alert("Tablet horizontal.");
	waitForElementToExist(".Header").then(element => {
		const Elements = document.querySelectorAll(".Header");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "11vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "13vh";
		});
	});
	
	waitForElementToExist(".ButtonContainer").then(element => {
		Elements = document.querySelectorAll(".ButtonContainer");
		
		Elements.forEach(Element => {
			Element.style.top = "53vh";
			Element.style.left = "10%";
			Element.style.height = "4em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist(".MainButton").then(element => {
		Elements = document.querySelectorAll(".MainButton");
		
		Elements.forEach(Element => {
			Element.style.width = "30vw";
			Element.style.fontSize = "3.5vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#AboutMe").then(element => {
		Elements = document.querySelectorAll("#AboutMe");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Education").then(element => {
		Elements = document.querySelectorAll("#Education");
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist("#Portfolio").then(element => {
		Elements = document.querySelectorAll("#Portfolio");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist("#Experience").then(element => {
		Elements = document.querySelectorAll("#Experience");
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}



if (Device == "Phone") {
	PhoneVertical();
	if (screen.width >= screen.height) {
		PhoneHorizontal();
	}
}

if (Device == "Tablet") {
	TabletVertical();
	if (screen.width >= screen.height) {
		TabletHorizontal();
	}
}