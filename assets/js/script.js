$(document).ready(function () {
	$('[data-bs-toggle="tooltip"]')
		.on("mouseenter", function () {
			$(this).tooltip("show");
		})
		.on("mouseleave", function () {
			$(this).tooltip("hide");
		});
});
