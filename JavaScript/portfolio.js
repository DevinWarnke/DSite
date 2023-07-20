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
			Element.style.height = "9vw";
			Element.style.left = "10%";
			Element.style.position = "relative";
			Element.style.padding = "0px";
			Element.style.margin = "0px";
			Element.style.marginBottom = "1vh";
			Element.style.top = "14.5vh";
		});
	});
	
	waitForElementToExist(".PortfolioBox").then(element => {
		Elements = document.querySelectorAll(".PortfolioBox");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "10vw";
			Element.style.width = "90vw";
			Element.style.height = "75vh";
			Element.style.left = "5vw";
			Element.style.position = "relative";
			Element.style.top = "14.5vh";
			Element.style.border = "0.6vw solid #122247D3";
			Element.style.margin = "-0.6vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ExperienceLabel").then(element => {
		Elements = document.querySelectorAll(".ExperienceLabel");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "3.2vw";
			Element.style.left = "10%";
			Element.style.right = "unset";
			Element.style.width = "30%";
			Element.style.top = "6%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".CertificationLabel").then(element => {
		Elements = document.querySelectorAll(".CertificationLabel");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "3.2vw";
			Element.style.left = "unset";
			Element.style.right = "10%";
			Element.style.width = "30%";
			Element.style.top = "6%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".Experience").then(element => {
		Elements = document.querySelectorAll(".Experience");
		
		Elements.forEach(Element => {
			Element.style.height = "17%";
			Element.style.top = "10%";
			Element.style.width = "30%";
			Element.style.left = "10%";
			Element.style.right = "unset";
			Element.style.border = "0.4vw solid #595B70DD";
			Element.style.margin = "-0.4vw";
			Element.style.borderradius = "3vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".Certifications").then(element => {
		Elements = document.querySelectorAll(".Certifications");
		
		Elements.forEach(Element => {
			Element.style.height = "17%";
			Element.style.top = "10%";
			Element.style.width = "30%";
			Element.style.left = "unset";
			Element.style.right = "10%";
			Element.style.border = "0.4vw solid #595B70DD";
			Element.style.margin = "-0.4vw";
			Element.style.borderradius = "3vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ListText").then(element => {
		Elements = document.querySelectorAll(".ListText");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "2.3vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".Project").then(element => {
		Elements = document.querySelectorAll(".Project");
		
		Elements.forEach(Element => {
			Element.style.height = "30%";
			Element.style.width = "40%";
			Element.style.border = "0.4vw solid #595B70DD";
			Element.style.margin = "-0.4vw";
			Element.style.borderRadius = "3vw 3vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Project1").then(element => {
		Elements = document.querySelectorAll("#Project1");
		
		Elements.forEach(Element => {
			Element.style.top = "33%";
			Element.style.left = "5%";
			Element.style.right = "unset";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Project2").then(element => {
		Elements = document.querySelectorAll("#Project2");
		
		Elements.forEach(Element => {
			Element.style.top = "33%";
			Element.style.left = "unset";
			Element.style.right = "5%";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Project3").then(element => {
		Elements = document.querySelectorAll("#Project3");
		
		Elements.forEach(Element => {
			Element.style.top = "68%";
			Element.style.left = "5%";
			Element.style.right = "unset";
			console.log(Element);
		});
	});
	
	waitForElementToExist("#Project4").then(element => {
		Elements = document.querySelectorAll("#Project4");
		
		Elements.forEach(Element => {
			Element.style.top = "68%";
			Element.style.left = "unset";
			Element.style.right = "5%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ProjectIcon").then(element => {
		Elements = document.querySelectorAll(".ProjectIcon");
		
		Elements.forEach(Element => {
			Element.style.borderRadius = "3vw 3vw 0vw 0vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ProjectName").then(element => {
		Elements = document.querySelectorAll(".ProjectName");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "3.2vw";
			Element.style.top = "-8.4%";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ProjectDate").then(element => {
		Elements = document.querySelectorAll(".ProjectDate");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "3vw";
			console.log(Element);
		});
	});
	
	waitForElementToExist(".ProjectDescription").then(element => {
		Elements = document.querySelectorAll(".ProjectDescription");
		
		Elements.forEach(Element => {
			Element.style.fontSize = "2.8vw";
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
			Element.style.border = "0.4vw solid #64516DDD";
			Element.style.margin = "-0.4vw";
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