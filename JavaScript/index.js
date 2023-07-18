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
	waitForElementToExist('.Header').then(element => {
		const Elements = document.querySelectorAll('.Header');
		
		Elements.forEach(Element => {
			Element.style.fontSize = "11vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "25vh";
		});
	});
	
	waitForElementToExist('.ButtonContainer').then(element => {
		Elements = document.querySelectorAll('.ButtonContainer');
		
		Elements.forEach(Element => {
			Element.style.top = "45vh";
			Element.style.left = "10%";
			Element.style.height = "4em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist('.MainButton').then(element => {
		Elements = document.querySelectorAll('.MainButton');
		
		Elements.forEach(Element => {
			Element.style.width = "35vw";
			Element.style.fontSize = "5vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist('#AboutMe').then(element => {
		Elements = document.querySelectorAll('#AboutMe');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Education').then(element => {
		Elements = document.querySelectorAll('#Education');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist('#Portfolio').then(element => {
		Elements = document.querySelectorAll('#Portfolio');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Experience').then(element => {
		Elements = document.querySelectorAll('#Experience');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}

function PhoneHorizontal() {
	waitForElementToExist('.Header').then(element => {
		const Elements = document.querySelectorAll('.Header');
		
		Elements.forEach(Element => {
			Element.style.fontSize = "8vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "18vh";
			Element.style.height = "0.65em";
			Element.style.lineHeight = "50%";
		});
	});
	
	waitForElementToExist('.ButtonContainer').then(element => {
		Elements = document.querySelectorAll('.ButtonContainer');
		
		Elements.forEach(Element => {
			Element.style.top = "65vh";
			Element.style.left = "10%";
			Element.style.height = "2em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist('.MainButton').then(element => {
		Elements = document.querySelectorAll('.MainButton');
		
		Elements.forEach(Element => {
			Element.style.width = "32.5vw";
			Element.style.fontSize = "3vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist('#AboutMe').then(element => {
		Elements = document.querySelectorAll('#AboutMe');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Education').then(element => {
		Elements = document.querySelectorAll('#Education');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist('#Portfolio').then(element => {
		Elements = document.querySelectorAll('#Portfolio');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Experience').then(element => {
		Elements = document.querySelectorAll('#Experience');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}

function TabletVertical() {
	waitForElementToExist('.Header').then(element => {
		const Elements = document.querySelectorAll('.Header');
		
		Elements.forEach(Element => {
			Element.style.fontSize = "11vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "25vh";
		});
	});
	
	waitForElementToExist('.ButtonContainer').then(element => {
		Elements = document.querySelectorAll('.ButtonContainer');
		
		Elements.forEach(Element => {
			Element.style.top = "50vh";
			Element.style.left = "10%";
			Element.style.height = "4em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist('.MainButton').then(element => {
		Elements = document.querySelectorAll('.MainButton');
		
		Elements.forEach(Element => {
			Element.style.width = "32.5vw";
			Element.style.fontSize = "5vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist('#AboutMe').then(element => {
		Elements = document.querySelectorAll('#AboutMe');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Education').then(element => {
		Elements = document.querySelectorAll('#Education');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist('#Portfolio').then(element => {
		Elements = document.querySelectorAll('#Portfolio');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Experience').then(element => {
		Elements = document.querySelectorAll('#Experience');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
}

function TabletHorizontal() {
	waitForElementToExist('.Header').then(element => {
		const Elements = document.querySelectorAll('.Header');
		
		Elements.forEach(Element => {
			Element.style.fontSize = "11vw";
			Element.style.width = "80vw";
			Element.style.left = "10%";
			Element.style.top = "13vh";
		});
	});
	
	waitForElementToExist('.ButtonContainer').then(element => {
		Elements = document.querySelectorAll('.ButtonContainer');
		
		Elements.forEach(Element => {
			Element.style.top = "53vh";
			Element.style.left = "10%";
			Element.style.height = "4em";
			Element.style.width = "80%";
			Element.style.fontSize = "2.5vw";
			
		});
	});
	
	waitForElementToExist('.MainButton').then(element => {
		Elements = document.querySelectorAll('.MainButton');
		
		Elements.forEach(Element => {
			Element.style.width = "30vw";
			Element.style.fontSize = "3.5vw";
			Element.style.height = "2.2em";
			console.log(Element);
		});
	});
	
	waitForElementToExist('#AboutMe').then(element => {
		Elements = document.querySelectorAll('#AboutMe');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Education').then(element => {
		Elements = document.querySelectorAll('#Education');
		
		Elements.forEach(Element => {
			Element.style.top = "-5vw";
			Element.style.left = "unset";
			Element.style.right = "0%";
		});
	});
	
	waitForElementToExist('#Portfolio').then(element => {
		Elements = document.querySelectorAll('#Portfolio');
		
		Elements.forEach(Element => {
			Element.style.top = "100%";
			Element.style.left = "0%";
			Element.style.right = "unset";
		});
	});
	
	waitForElementToExist('#Experience').then(element => {
		Elements = document.querySelectorAll('#Experience');
		
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