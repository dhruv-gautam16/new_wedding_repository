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
$(window).on('scroll', function()
{	
	add_onscroll_effect($('.scrolleffect1'), 'open', 767, 200);
  add_onscroll_effect($('.scrolleffect2'), 'open', 767, 200);
});
function add_onscroll_effect(obj, trigger_class, win_width=0, scarto=0)
{
	if ( $(window).width() < win_width ) return;
	if ( obj.length == 0 ) return;

	var currOffset 	= 0,
		win_scroll 	= $(window).scrollTop();

	obj.each(function(index)
	{
		currOffset = ( $(this).offset().top - scarto );

		if ( win_scroll > currOffset )
		{
			$(this).addClass(trigger_class);
		}
	});
}
// Js scroll code end
