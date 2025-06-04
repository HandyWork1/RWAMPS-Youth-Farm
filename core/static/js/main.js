document.addEventListener("DOMContentLoaded", function () {

	// Desktop Services Dropdown
	const toggleBtn = document.getElementById("servicesToggle");
	const dropdown = document.getElementById("servicesDropdown");
	const arrow = document.getElementById("servicesArrow");
	let isOpen = false;

	if (toggleBtn && dropdown && arrow) {
		toggleBtn.addEventListener("click", function (e) {
			e.preventDefault();
			isOpen = !isOpen;
			dropdown.classList.toggle("hidden", !isOpen);
			arrow.classList.toggle("rotate-180", isOpen);
		});

		document.addEventListener("click", function (e) {
			if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
				isOpen = false;
				dropdown.classList.add("hidden");
				arrow.classList.remove("rotate-180");
			}
		});
	}

	// Mobile Menu
	const mobileMenu = document.getElementById("mobile-menu");
	const mobilePanel = document.getElementById("mobile-menu-panel");
	const closeBtn = document.getElementById("mobile-menu-close");
	const menuToggleBtn = document.getElementById("menu-toggle");

	if (menuToggleBtn && mobileMenu && mobilePanel) {
		menuToggleBtn.addEventListener("click", () => {
			document.body.classList.add("overflow-hidden");
			mobileMenu.classList.remove("hidden");

			setTimeout(() => {
				mobileMenu.classList.add("opacity-100");
				mobilePanel.classList.remove("translate-x-full");
			}, 10);
		});
	}

	// Close Mobile Menu
	const closeMobileMenu = () => {
		if (mobileMenu && mobilePanel) {
			mobileMenu.classList.remove("opacity-100");
			mobilePanel.classList.add("translate-x-full");
			document.body.classList.remove("overflow-hidden");

			setTimeout(() => {
				mobileMenu.classList.add("hidden");
			}, 400);
		}
	};

	if (closeBtn) {
		closeBtn.addEventListener("click", closeMobileMenu);
	}

	// Expose to global for inline onclick handlers
	window.closeMobileMenu = closeMobileMenu;

	window.toggleDropdown = (id) => {
		const dropdown = document.getElementById(id);
		const arrow = document.getElementById("arrow-" + id);
		if (dropdown && arrow) {
			dropdown.classList.toggle("hidden");
			arrow.classList.toggle("rotate-180");
		}
	};
});
