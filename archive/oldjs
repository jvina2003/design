//this is where we apply opacity to the arrow
$(document).scroll( function(){

	//get scroll position
	var topWindow = $(document).scrollTop();
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




$(document).ready(function() {
	$(function() {
	  $("#slideshow").cycle({
		fx: "scrollHorz",
		speed: "fast",
		timeout: 0,
		pager: "#nav",
		after: removePlanArrow,
		pagerAnchorBuilder: function(idx, slide) {
		  return "#nav li:eq(" + idx + ") ";
		}
	  });
  
	  $("#tab-employee #prev").click(function() {
		$("#slideshow").cycle("prev");
	  });
  
	  $("#tab-employee #next").click(function() {
		$("#slideshow").cycle("next");
	  });
  
	  function removePlanArrow(curr, next, opts) {
		var index = opts.currSlide;
		$("#tab-employee #prev")[index == 0 ? "fadeOut" : "fadeIn"]();
		$("#tab-employee #next")[
		  index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
		]();
	  }
  
	  //MANAGER TAB CYCLE
	  $("#slideshow2").cycle({
		fx: "scrollHorz",
		speed: "fast",
		timeout: 0,
		pager: "#nav2",
		after: arrowFunction,
		pagerAnchorBuilder: function(idx, slide) {
		  return "#nav2 li:eq(" + idx + ") ";
		}
	  });
  
	  $("#tab-manager #prev2").click(function() {
		$("#slideshow2").cycle("prev");
	  });
  
	  $("#tab-manager #next2").click(function() {
		$("#slideshow2").cycle("next");
	  });
  
	  function arrowFunction(curr, next, opts) {
		var index = opts.currSlide;
		$("#tab-manager #prev2")[index == 0 ? "fadeOut" : "fadeIn"]();
		$("#tab-manager #next2")[
		  index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
		]();
	  }
	});
  });
  

  






function bodyPaint() {
	window.addEventListener("scroll", function () {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		const triggers = document.querySelectorAll("[data-color]");

		const body = document.body;

		// Change 33% earlier than scroll position so colour is there when you arrive.
		const scroll = scrollTop + window.innerHeight / 3;

		for (var i = 0; i < triggers.length; i++) {
			const trigger = triggers[i];
			const triggerRect = trigger.getBoundingClientRect();
			const triggerRectTop = triggerRect.top + scrollTop;
			const triggerHeight = trigger.offsetHeight;
			const triggerColor = trigger.getAttribute("data-color");

			// if position is within range of this panel.
			// So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
			// Remember we set the scroll to 33% earlier in scroll var.
			if (triggerRectTop <= scroll && triggerRectTop + triggerHeight > scroll) {
				// Set attribute of currently active div
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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





$(function(){
	$('.carousel-item').eq(0).addClass('active');
	var total = $('.carousel-item').length;
	var current = 0;
	$('#moveRight').on('click', function(){
	  var next=current;
	  current= current+1;
	  setSlide(next, current);
	});
	$('#moveLeft').on('click', function(){
	  var prev=current;
	  current = current- 1;
	  setSlide(prev, current);
	});
	function setSlide(prev, next){
	  var slide= current;
	  if(next>total-1){
	   slide=0;
		current=0;
	  }
	  if(next<0){
		slide=total - 1;
		current=total - 1;
	  }
			 $('.carousel-item').eq(prev).removeClass('active');
			 $('.carousel-item').eq(slide).addClass('active');
		setTimeout(function(){
  
		},800);
	  
  
	  
	  console.log('current '+current);
	  console.log('prev '+prev);
	}
  });


 // const imgContent = document.querySelectorAll('.img-content-hover');

//function showImgContent(e) {
 // for(var i = 0; i < imgContent.length; i++) {
  //  x = e.pageX;
  //  y = e.pageY;
  //  imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
 // }
//};

//document.addEventListener('mousemove', showImgContent);
