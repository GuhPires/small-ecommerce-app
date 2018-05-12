window.onload = function() {
	var coliderIcon = document.querySelectorAll(".colider-icon");
	var hiddenMenu = document.querySelectorAll(".colider-hidden");

		coliderIcon[0].addEventListener("click", function() {
			hiddenMenu[0].classList.toggle("show-hidden-list");
		});

		window.onresize = function() {
			if(window.innerWidth >= 880) {
				hiddenMenu[0].classList.remove("show-hidden-list");
			}
		}
}