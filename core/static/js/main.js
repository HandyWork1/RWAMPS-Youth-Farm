document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("servicesToggle");
  const dropdown = document.getElementById("servicesDropdown");
  const arrow = document.getElementById("servicesArrow");

  let isOpen = false;

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      isOpen = !isOpen;
      dropdown.classList.toggle("hidden", !isOpen);
      arrow.classList.toggle("rotate-180", isOpen);
    });

    // Close dropdown on outside click
    document.addEventListener("click", function (e) {
      if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
        isOpen = false;
        dropdown.classList.add("hidden");
        arrow.classList.remove("rotate-180");
      }
    });
  }
});
