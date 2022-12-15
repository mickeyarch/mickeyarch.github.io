var toggleItems = document.getElementById("toggle");
var navItemsContainer = document.getElementsByClassName("nav-items")[0];
var navItems = navItemsContainer.getElementsByTagName("a");

navItemsContainer.addEventListener("click", untoggle);
for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", smoothScroll);
}

function untoggle() {
	if (toggleItems.checked === true) {
		toggleItems.checked = false;
	}
}

function smoothScroll(evt) {
	var targetId = evt.target.href;
	var targetLocation = 0;
	var targetInterval = window.scrollY;

	targetIdStart = targetId.indexOf("#") + 1;
	targetId = targetId.substr(targetIdStart);
	targetLocation = document.getElementById(targetId).offsetTop;

	if (targetLocation < 1) {
		targetLocation = 1;
	}

	var moveInterval = setInterval(function() {
		if (targetInterval < targetLocation) {
			targetInterval = targetInterval + 25;

			if (targetInterval > targetLocation) {
				clearInterval(moveInterval);
			}
		}
		else if (targetInterval > targetLocation) {
			targetInterval = targetInterval - 25;
		}

		window.scrollTo(0, targetInterval);
	}, 5);
}