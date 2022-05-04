//Js for Navbar Start
function test() {
	var tabsNewAnim = $("#navbarSupportedContent");
	var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
	var activeItemNewAnim = tabsNewAnim.find(".active");
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		top: itemPosNewAnimTop.top + "px",
		left: itemPosNewAnimLeft.left + "px",
		height: activeWidthNewAnimHeight + "px",
		width: activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$("#navbarSupportedContent ul li").removeClass("active");
		$(this).addClass("active");
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			top: itemPosNewAnimTop.top + "px",
			left: itemPosNewAnimLeft.left + "px",
			height: activeWidthNewAnimHeight + "px",
			width: activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () {
		test();
	});
});
$(window).on("resize", function () {
	setTimeout(function () {
		test();
	}, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () {
		test();
	});
});


jQuery(document).ready(function ($) {
	
	var path = window.location.pathname.split("/").pop();

	
	if (path == "") {
		path = "index.html";
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	
	target.parent().addClass("active");
});



// Js Navbar End


// Js code for scroll effect

document.addEventListener("DOMContentLoaded", function () {
	const options = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.4
	};
  
	// IMAGE ANIMATION
  
	let revealCallback = (entries) => {
	  entries.forEach((entry) => {
		let container = entry.target;
  
		if (entry.isIntersecting) {
		  console.log(container);
		  container.classList.add("animating");
		  return;
		}
  
		if (entry.boundingClientRect.top > 0) {
		  container.classList.remove("animating");
		}
	  });
	};
  
	let revealObserver = new IntersectionObserver(revealCallback, options);
  
	document.querySelectorAll(".reveal").forEach((reveal) => {
	  revealObserver.observe(reveal);
	});
  
	// TEXT ANIMATION
  
	let fadeupCallback = (entries) => {
	  entries.forEach((entry) => {
		let container = entry.target;
		container.classList.add("not-fading-up");
  
		if (entry.isIntersecting) {
		  container.classList.add("fading-up");
		  return;
		}
  
		if (entry.boundingClientRect.top > 0) {
		  container.classList.remove("fading-up");
		}
	  });
	};
  
	let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
  
	document.querySelectorAll(".fadeup").forEach((fadeup) => {
	  fadeupObserver.observe(fadeup);
	});
  });
  

// Js scroll code end
