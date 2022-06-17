const updateCartNumber = () => {
	try {
		let x = JSON.parse(window.localStorage.getItem("cart-items")).length;
		$("#cart_val").html(x)
	} catch {
		$("#cart_val").html(0)
	}
}

const fabricRequiredAppendHtml = () => {
	const config = {
		grid_rows: 5
	}
	var jsonData;
	// CREATE A RANDOM ID
	const makeid = () => {
		let result = "id";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 15; i++)
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		return result;
	};

	// GET THE DATA.JSON FILE, PARSE AND APPEND
	$.get("./data.json", (e) => {
		jsonData = e;
		let id = null;
		for (let i = 0; i < jsonData.length; i++) {
			if (i % config.grid_rows == 0) {
				id = makeid();
				$("#swiper-wrapper").append(`<div class="swiper-slide"><div class="container1" id="${id}"></div></div>`);
			}
			let id_inner = [makeid(), makeid()];
			let elem = '';
			for (let j in jsonData[i].param.colors) {
				elem = elem + `<option value="${jsonData[i].param.colors[j]}">${jsonData[i].param.colors[j]}</option>`
			}
			$(`#${id}`).append(`
		<div class="card" data-desc="${jsonData[i].desc}">
			<div class="card-header">
				<img src="${jsonData[i].image}" alt="An Error Occurred" />
			</div>
			<div class="card-body">
				<h3 class="title">${jsonData[i].name}</h3>
				<buttons>
					<div class="form-group">
						<div class="input-group fabric_container" data-rel="${i}" data-name="${jsonData[i].name}" id="${id_inner[1]}">
							<select class="combobox" id="${id_inner[1]}_combobox">
								${elem}
							</select>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group fabric_container" data-rel="${i}" data-name="${jsonData[i].name}" id="${id_inner[0]}">
							<div class="input-group-btn">
								<button id="${id_inner[0]}_qty_decrement" class="btn btn-default fabric_qty_decrement" data-parent="${id_inner[0]}" data-numeric-min="${jsonData[i].param.number.min}">
									<span class="glyphicon glyphicon-minus"></span>
								</button>
							</div>
							<input type="text" id="${id_inner[0]}_qty_numPad" value="${jsonData[i].param.number.min}" readonly class="form-control input-number fabric_qty_value" style="text-align: center; width: 75px" />
							<div class="input-group-btn">
								<button id="${id_inner[0]}_qty_increment" class="btn btn-default fabric_qty_increment" data-parent="${id_inner[0]}" data-numeric-max="${jsonData[i].param.number.max}">
									<span class="glyphicon glyphicon-plus"></span>
								</button>
							</div>
						</div>
					</div>
					<div class="button cart_adder" data-rel="${i}" data-name="${jsonData[i].name}" data-id="${id_inner[0]}" data-id-color="${id_inner[1]}">add to cart</div>
				</buttons>
			</div>
		</div>`);
		}

		$(".cart_adder").on("click", (e) => {
			let item_list;
			if (parseInt($(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr("value")) == 0) return
			try {
				item_list = window.localStorage.getItem("cart-items")
				item_list = JSON.parse(item_list)
			} catch {
				console.warn("[FAILSAFE] JSON Parse Failure. Aborting");
			}
			if (item_list == null || item_list.length == 0) {
				item_list = []
				console.info("[FALLBACK] Item Cart Empty. Creating new");
			} else {
				console.info("[ITEM LIST] Item List bag retrived");
			}
			let trigger = false
			for (let i = 0; i < item_list.length; i++) {
				if (item_list[i].item == $(e.currentTarget).attr("data-name") && item_list[i].id == $(e.currentTarget).attr("data-rel") && document.querySelector(`#${$(e.currentTarget).attr("data-id-color")}_combobox`).value == item_list[i].color) {
					swal({
							title: "Are you sure?",
							text: `${item_list[i].count} number of ${item_list[i].item} of the same color was already found in your cart. Would you like to add ${$(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr("value")} more?`,
							icon: "warning",
							buttons: true,
							dangerMode: true,
						}).then((value) => {
							if (value) {
								item_list = JSON.parse(window.localStorage.getItem("cart-items"))
								item_list[i].count = parseInt(item_list[i].count) + parseInt($(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr("value"));
								window.localStorage.setItem("cart-items", JSON.stringify(item_list))
								updateCartNumber()
								$(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr({
									value: 0
								})
							} else {
								return
							}
						});
					trigger = true;
				}
			}
			if (!trigger) {
				item_list.push({
					"item": $(e.currentTarget).attr("data-name"),
					"id": $(e.currentTarget).attr("data-rel"),
					"color": document.querySelector(`#${$(e.currentTarget).attr("data-id-color")}_combobox`).value,
					"count": $(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr("value")
				})
				$(`#${$(e.currentTarget).attr("data-id")}_qty_numPad`).attr({
					value: 0
				})
			}
			item_list = JSON.stringify(item_list)
			window.localStorage.setItem("cart-items", item_list)
			updateCartNumber()
		})

		const valueChange = (mode, id) => {
			let value = 0;
			try {
				value = parseInt(document.querySelector(`#${id}_qty_numPad`).value)
			} catch {
				console.error("Raised Exception at ID: %s. Exception called as ValueCheck with value returned %s.", id, document.querySelector(`#${id}_qty_numPad`).value);
				console.error("Parameter inside textbox not of type INT. Defaulting to value 0");
			}

			if (mode == 0 && parseInt($(`#${id}_qty_decrement`).attr("data-numeric-min")) < value) {
				value = value - 1;
			} else if (mode == 1 && parseInt($(`#${id}_qty_increment	`).attr("data-numeric-max")) > value) {
				value = value + 1;
			} else {
				value = value;
			}
			$(`#${id}_qty_numPad`).attr({
				'value': value
			});
		}

		const colorChange = (mode, id) => {
			let value = 0;
			const items = $(`#${id}_color_numPad`).attr("data-content").split(",")
			try {
				value = parseInt($(`#${id}_color_numPad`).attr("data-curr"))
			} catch {
				console.error("Raised Exception at ID: %s. Exception called as ValueCheck.", id);
				console.error("Parameter inside textbox not of type INT. Defaulting to value 0");
			}

			if (mode == 0)(value == 0) ? value = parseInt($(`#${id}_color_decrement`).attr("data-max")) : value = value - 1;
			else if (mode == 1)(value == parseInt($(`#${id}_color_decrement`).attr("data-max")) - 1) ? value = 0 : value = value + 1;
			else value = value;

			$(`#${id}_color_numPad`).attr({
				"data-curr": value
			})
			$(`#${id}_color_numPad`).attr({
				'value': items[value]
			});
		}

		$(`.fabric_qty_decrement`).on("click", (e) => {
			valueChange(0, $(e.currentTarget).attr("data-parent"))
		})
		$(`.fabric_qty_increment`).on("click", (e) => {
			valueChange(1, $(e.currentTarget).attr("data-parent"))
		})

		// SWIPER CODE
		var swiper = new Swiper(".mySwiper", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
		swiper.init();

		// DESCRIPTION CODE
		$(".card-header").on("click", (e) => {
			descDisplay(
				$($($($(e.currentTarget).parent()).children()[1]).children()[0]).html(),
				$(e.currentTarget).parent().attr("data-desc"),
				343,
				""
			);
		});

		const descDisplay = (title, desc, cost, bg) => {
			$("body").append(`
			  <div class="infoPanel_bg">
				  <div class="infopanel">
					  <div class="img" style="background-image: url('${bg == "" ? "./fab1.png" : bg
				}')">
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
			  `);
			$(".close_infoPanel").on("click", () => {
				$(".close_infoPanel").off();
				$(".infoPanel_bg").css({
					animation: "infoPanel_bg_hide .2s ease-in"
				});
				setTimeout(() => {
					$(".infoPanel_bg").remove();
				}, 200);
			});
		};

	});
};

fabricRequiredAppendHtml();

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

$(function () {
	polaroidSlides();
});
//var currentSlide;
function polaroidSlides() {
	$polaroidSlide = $(".polaroid");
	currentSlide = 0;
	polaroidSlidesActive = true;
	TweenMax.set($polaroidSlide[1], { left: "60%", opacity: 0.5, scale: 0.5 });
	TweenMax.set($polaroidSlide[2], { left: "-60%", opacity: 0.5, scale: 0.5 });
	TweenMax.set($polaroidSlide[3], { opacity: 0, scale: 0 });
	//TweenMax.set($polaroidSlide[4], {opacity:0, scale:0});
};

function nextPolaroid() {
	TweenMax.to($polaroidSlide.eq(currentSlide), 1, { left: "-60%", opacity: 0.5, scale: 0.5 });
	var prevSlide = currentSlide;
	if (currentSlide < $polaroidSlide.length - 1) {
		currentSlide++;
	}
	else {
		currentSlide = 0;
	};
	if (currentSlide < $polaroidSlide.length - 1) {
		var followingSlide = currentSlide + 1;
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
				TweenMax.set($polaroidSlide[i], { opacity: 0, scale: 0 });
			}

		}
	}
	TweenMax.fromTo($polaroidSlide.eq(followingSlide), 1, { left: "100%", opacity: 0, scale: 0 }, { left: "60%", opacity: 0.5, scale: 0.5 });
	TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, { left: "60%", opacity: 0.5, scale: 0.5 }, { left: "0px", opacity: 1, scale: 1 });
}






function previousPolaroid() {
	TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, { left: 0, opacity: 1, scale: 1 }, { left: "60%", opacity: 0.5, scale: 0.5 });
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
				TweenMax.set($polaroidSlide[i], { opacity: 0, scale: 0 });
			}

		}
	}

	console.log("Slide to the left: " + followingSlide);

	TweenMax.fromTo($polaroidSlide.eq(followingSlide), 1, { left: "-100%", opacity: 0, scale: 0 }, { left: "-60%", opacity: 0.5, scale: 0.5 });
	TweenMax.fromTo($polaroidSlide.eq(currentSlide), 1, { left: "-60%", opacity: 0.5, scale: 0.5 }, { left: "0px", opacity: 1, scale: 1 });
}

setTimeout(() => {
	updateCartNumber()
}, 500)