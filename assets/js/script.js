$(document).ready(function () {
	// Navbar scroll color
	var navbar = $("#navbar");
	var defaultColor = "transparent";
	var activeColor = "#0dcaf0";

	$(window).scroll(function () {
		var scrollPosition = $(window).scrollTop();
		var aboutUsOffset = $("#about-us").offset().top;

		if (scrollPosition >= aboutUsOffset) {
			navbar.css("background-color", activeColor);
		} else {
			navbar.css("background-color", defaultColor);
		}
	});

	// Tooltip
	$('[data-bs-toggle="tooltip"]')
		.on("mouseenter", function () {
			$(this).tooltip("show");
		})
		.on("mouseleave", function () {
			$(this).tooltip("hide");
		});

	// Smooth scroll
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			event.preventDefault();

			var targetID = $(this).attr("href");

			if ($(targetID).length) {
				var targetOffset = $(targetID).offset().top;

				$("html, body").animate(
					{
						scrollTop: targetOffset,
					},
					100
				);
			} else {
				console.error("Target element not found:", targetID);
			}
		});
});
