// swiper code
var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

// end of swiper
function uplycra(max) {
	document.getElementById("myNumberlycra").value = parseInt(document.getElementById("myNumberlycra").value) + 1;
	if (document.getElementById("myNumberlycra").value >= parseInt(max)) {
		document.getElementById("myNumberlycra").value = max;
	}
}
function downlycra(min) {
	document.getElementById("myNumberlycra").value = parseInt(document.getElementById("myNumberlycra").value) - 1;
	if (document.getElementById("myNumberlycra").value <= parseInt(min)) {
		document.getElementById("myNumberlycra").value = min;
	}
}

function upsypter(max) {
	document.getElementById("myNumbersypter").value = parseInt(document.getElementById("myNumbersypter").value) + 1;
	if (document.getElementById("myNumbersypter").value >= parseInt(max)) {
		document.getElementById("myNumbersypter").value = max;
	}
}
function downsypter(min) {
	document.getElementById("myNumbersypter").value = parseInt(document.getElementById("myNumbersypter").value) - 1;
	if (document.getElementById("myNumbersypter").value <= parseInt(min)) {
		document.getElementById("myNumbersypter").value = min;
	}
}

function upgalaxy(max) {
	document.getElementById("myNumbergalaxy").value = parseInt(document.getElementById("myNumbergalaxy").value) + 1;
	if (document.getElementById("myNumbergalaxy").value >= parseInt(max)) {
		document.getElementById("myNumbergalaxy").value = max;
	}
}
function downgalaxy(min) {
	document.getElementById("myNumbergalaxy").value = parseInt(document.getElementById("myNumbergalaxy").value) - 1;
	if (document.getElementById("myNumbergalaxy").value <= parseInt(min)) {
		document.getElementById("myNumbergalaxy").value = min;
	}
}

function upmicro(max) {
	document.getElementById("myNumbermicro").value = parseInt(document.getElementById("myNumbermicro").value) + 1;
	if (document.getElementById("myNumbermicro").value >= parseInt(max)) {
		document.getElementById("myNumbermicro").value = max;
	}
}
function downmicro(min) {
	document.getElementById("myNumbermicro").value = parseInt(document.getElementById("myNumbermicro").value) - 1;
	if (document.getElementById("myNumbermicro").value <= parseInt(min)) {
		document.getElementById("myNumbermicro").value = min;
	}
}

function upvelvet(max) {
	document.getElementById("myNumbervelvet").value = parseInt(document.getElementById("myNumbervelvet").value) + 1;
	if (document.getElementById("myNumbervelvet").value >= parseInt(max)) {
		document.getElementById("myNumbervelvet").value = max;
	}
}
function downvelvet(min) {
	document.getElementById("myNumbervelvet").value = parseInt(document.getElementById("myNumbervelvet").value) - 1;
	if (document.getElementById("myNumbervelvet").value <= parseInt(min)) {
		document.getElementById("myNumbervelvet").value = min;
	}
}

function uptarda(max) {
		document.getElementById("myNumbertarda").value = parseInt(document.getElementById("myNumbertarda").value) + 1;
		if (document.getElementById("myNumbertarda").value >= parseInt(max)) {
			document.getElementById("myNumbertarda").value = max;
		}
	}
	function downtarda(min) {
		document.getElementById("myNumbertarda").value = parseInt(document.getElementById("myNumbertarda").value) - 1;
		if (document.getElementById("myNumbertarda").value <= parseInt(min)) {
			document.getElementById("myNumbertarda").value = min;
		}
	}
	
	
	function upfrill(max) {
		document.getElementById("myNumberfrill").value = parseInt(document.getElementById("myNumberfrill").value) + 1;
		if (document.getElementById("myNumberfrill").value >= parseInt(max)) {
			document.getElementById("myNumberfrill").value = max;
		}
	}
	function downfrill(min) {
		document.getElementById("myNumberfrill").value = parseInt(document.getElementById("myNumberfrill").value) - 1;
		if (document.getElementById("myNumberfrill").value <= parseInt(min)) {
			document.getElementById("myNumberfrill").value = min;
		}
	}
	
	
	function upgateshalbo(max) {
		document.getElementById("myNumbergateshalbo").value = parseInt(document.getElementById("myNumbergateshalbo").value) + 1;
		if (document.getElementById("myNumbergateshalbo").value >= parseInt(max)) {
			document.getElementById("myNumbergateshalbo").value = max;
		}
	}
	function downgateshalbo(min) {
		document.getElementById("myNumbergateshalbo").value = parseInt(document.getElementById("myNumbergateshalbo").value) - 1;
		if (document.getElementById("myNumbergateshalbo").value <= parseInt(min)) {
			document.getElementById("myNumbergateshalbo").value = min;
		}
	}
	
	
	function upchaircover(max) {
		document.getElementById("myNumberchaircover").value = parseInt(document.getElementById("myNumberchaircover").value) + 1;
		if (document.getElementById("myNumberchaircover").value >= parseInt(max)) {
			document.getElementById("myNumberchaircover").value = max;
		}
	}
	function downchaircover(min) {
		document.getElementById("myNumberchaircover").value = parseInt(document.getElementById("myNumberchaircover").value) - 1;
		if (document.getElementById("myNumberchaircover").value <= parseInt(min)) {
			document.getElementById("myNumberchaircover").value = min;
		}
	}
	
	
	function uptablecover(max) {
		document.getElementById("myNumbertablecover").value = parseInt(document.getElementById("myNumbertablecover").value) + 1;
		if (document.getElementById("myNumbertablecover").value >= parseInt(max)) {
			document.getElementById("myNumbertablecover").value = max;
		}
	}
	function downtablecover(min) {
		document.getElementById("myNumbertablecover").value = parseInt(document.getElementById("myNumbertablecover").value) - 1;
		if (document.getElementById("myNumbertablecover").value <= parseInt(min)) {
			document.getElementById("myNumbertablecover").value = min;
		}
	}
	
	
	function upchair(max) {
		document.getElementById("myNumberchair").value = parseInt(document.getElementById("myNumberchair").value) + 1;
		if (document.getElementById("myNumberchair").value >= parseInt(max)) {
			document.getElementById("myNumberchair").value = max;
		}
	}
	function downchair(min) {
		document.getElementById("myNumberchair").value = parseInt(document.getElementById("myNumberchair").value) - 1;
		if (document.getElementById("myNumberchair").value <= parseInt(min)) {
			document.getElementById("myNumberchair").value = min;
		}
	}
	
// Function to invoke description param

$(".card-header").on("click", (e) => {
	descDisplay($($($($(e.currentTarget).parent()).children()[1]).children()[0]).html(), $(e.currentTarget).parent().attr("data-desc"), 343, '')
})

const descDisplay = (title, desc, cost, bg) => {
	$("body").append(`
	<div class="infoPanel_bg">
		<div class="infopanel">
			<div class="img" style="background-image: url('${(bg == '')? './fab1.png': bg}')">
			</div>
			<div class="info">
				<div class="title">${title}</div>
				<div class="desc">${desc}</div>
				<div class="buttons">
					<button class="btn close_infoPanel">
						Close Info
					</button>
				</div>
			</div>
		</div>
	</div>
	`)
	$(".close_infoPanel").on("click", () => {
		$(".close_infoPanel").off();
		$(".infoPanel_bg").css({"animation": "infoPanel_bg_hide .2s ease-in"});
		setTimeout(() => {
			$(".infoPanel_bg").remove()
		}, 200)
	})
}

// end



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

