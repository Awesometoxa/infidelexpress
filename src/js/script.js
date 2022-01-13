window.addEventListener("DOMContentLoaded", () => {
	$(".promo__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		fade: true,
		cssEase: "linear",
		zIndex: 10,
		pauseOnHover: false,
		pauseOnFocus: false,
	});

	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav__list");
	const navMenuItem = document.querySelectorAll(".nav__item");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		navMenu.classList.toggle("nav__list_active");
	});

	navMenuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			navMenu.classList.toggle("nav__list_active");
		});
	});

	const pageUpBtn = document.querySelector("#pageUp");

	function showElementWithScroll(el) {
		let x = document.documentElement.scrollTop;
		if (x > 800) {
			el.classList.add("pageup-show");
		} else {
			el.classList.remove("pageup-show");
		}
	}

	window.addEventListener("scroll", () => {
		showElementWithScroll(pageUpBtn);
	});
});
