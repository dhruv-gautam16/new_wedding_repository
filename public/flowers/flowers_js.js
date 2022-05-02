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

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if (path == "") {
		path = "index.html";
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Add active class to target link
	target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

$(function(){
	polaroidSlides();
  });
  //var currentSlide;
  function polaroidSlides() {
	$polaroidSlide = $(".polaroid");
	currentSlide = 0;
	polaroidSlidesActive = true;
	TweenMax.set($polaroidSlide[1], {left:"60%", opacity:0.5, scale:0.5});
	TweenMax.set($polaroidSlide[2], {left:"-60%", opacity:0.5, scale:0.5});
	TweenMax.set($polaroidSlide[3], {opacity:0, scale:0});
	//TweenMax.set($polaroidSlide[4], {opacity:0, scale:0});
  };
  
  function nextPolaroid() {
	  TweenMax.to($polaroidSlide.eq(currentSlide), 1, {left:"-60%", opacity:0.5, scale:0.5});
	  var prevSlide = currentSlide;
	  if (currentSlide < $polaroidSlide.length - 1) {
		currentSlide++;
	  }
	  else {
		currentSlide = 0;      
	  };
	  if (currentSlide < $polaroidSlide.length - 1) {
		var followingSlide = currentSlide+1;
	  }
	  else {
		followingSlide = 0;
	  }
	
	
	 if ($polaroidSlide.length >= 4) {
	  if (currentSlide == 0) {
		var left = $polaroidSlide.length - 1;
	  }
	  else {
		left = currentSlide - 1;
	  }
	  if (currentSlide == $polaroidSlide.length - 1) {
		var right = 0;
	  }
	  else {
		right = currentSlide + 1;
	  }
	  var range = [];
	  for (i = 0; i < $polaroidSlide.length; i++) {
		range.push(i);
	  }
	  
	  for (i = 0; i < range.length; i++) {
		if ((range[i] != left) && (range[i] != right) && (range[i] != currentSlide)) {
		  TweenMax.set($polaroidSlide[i], {opacity:0, scale:0});
		}
  
	  }
	}
	  TweenMax.fromTo($polaroidSlide.eq(followingSlide),1, {left:"100%", opacity:0,scale:0}, {left:"60%", opacity:0.5,scale:0.5});
	  TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, {left: "60%", opacity:0.5, scale:0.5}, {left:"0px", opacity:1, scale:1});
	}
	
	
	
	
	
	
  function previousPolaroid() {
	  TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, {left:0, opacity:1, scale:1},{left:"60%", opacity:0.5, scale:0.5});
	  var prevSlide = currentSlide;
	  if (currentSlide > 0) {
		currentSlide--;
	  }
	  else {
		currentSlide = $polaroidSlide.length - 1;
	  };
	  if (currentSlide > 0) {
		var followingSlide = currentSlide - 1;
	  }
	  else {
		followingSlide = $polaroidSlide.length - 1;
	  }
	
	
	if ($polaroidSlide.length >= 4) {
	  if (currentSlide == 0) {
		var left = $polaroidSlide.length - 1;
	  }
	  else {
		left = currentSlide - 1;
	  }
	  if (currentSlide == $polaroidSlide.length - 1) {
		var right = 0;
	  }
	  else {
		right = currentSlide + 1;
	  }
	  var range = [];
	  for (i = 0; i < $polaroidSlide.length; i++) {
		range.push(i);
	  }
  
	  for (i = 0; i < range.length; i++) {
		if ((range[i] != left) && (range[i] != right) && (range[i] != currentSlide)) {
		  TweenMax.set($polaroidSlide[i], {opacity:0, scale:0});
		}
  
	  }
	}
	
	console.log("Slide to the left: " + followingSlide);
	
	TweenMax.fromTo($polaroidSlide.eq(followingSlide),1, {left:"-100%", opacity:0,scale:0}, {left:"-60%", opacity:0.5,scale:0.5});
	  TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, {left: "-60%", opacity:0.5, scale:0.5}, {left:"0px", opacity:1, scale:1});
	}
