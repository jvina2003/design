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



//this is where we apply opacity to the arrow
$(window).scroll( function(){

	//get scroll position
	var topWindow = $(window).scrollTop();
	//multipl by 1.5 so the arrow will become transparent half-way up the page
	var topWindow = topWindow * 1.5;
	
	//get height of window
	var windowHeight = $(window).height();
		
	//set position as percentage of how far the user has scrolled 
	var position = topWindow / windowHeight;
	//invert the percentage
	position = 1 - position;
  
	//define arrow opacity as based on how far up the page the user has scrolled
	//no scrolling = 1, half-way up the page = 0
	$('.arrow-wrap').css('opacity', position);
  
  });
  
  
  
  
  
  
  //Code stolen from css-tricks for smooth scrolling:
  $(function() {
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  $('html,body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});
  });