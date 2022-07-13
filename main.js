function bodyPaint() {
	window.addEventListener("scroll", function () {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		const triggers = document.querySelectorAll("[data-color]");

		const body = document.body;
		
		const scroll = scrollTop + window.innerHeight / 3;

		for (var i = 0; i < triggers.length; i++) {
			const trigger = triggers[i];
			const triggerRect = trigger.getBoundingClientRect();
			const triggerRectTop = triggerRect.top + scrollTop;
			const triggerHeight = trigger.offsetHeight;
			const triggerColor = trigger.getAttribute("data-color");

			// if position is within range of this panel.
			// So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
			if (triggerRectTop <= scroll && triggerRectTop + triggerHeight > scroll) {
				body.setAttribute("data-paint", triggerColor);
				console.log(body.dataset.paint);
			}
		}
	});
}

bodyPaint();

function toggleDarkLight() {
	var body = document.getElementById("body");
	var currentClass = body.className;
	body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  }


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
