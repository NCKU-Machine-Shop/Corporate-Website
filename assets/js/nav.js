document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;
  var dropdown = nav.querySelector(".dropdown-toggle");
  var menu = dropdown && document.getElementById(dropdown.getAttribute("aria-controls"));
  function closeDropdown(returnFocus) {
    if (!dropdown || !menu) return;
    dropdown.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    if (returnFocus) dropdown.focus();
  }
  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) closeDropdown(false);
  });
  if (!dropdown || !menu) return;
  dropdown.addEventListener("click", function () {
    var opening = dropdown.getAttribute("aria-expanded") !== "true";
    dropdown.setAttribute("aria-expanded", String(opening));
    menu.hidden = !opening;
  });
  dropdown.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      dropdown.setAttribute("aria-expanded", "true");
      menu.hidden = false;
      menu.querySelector("a").focus();
    }
  });
  document.addEventListener("click", function (event) {
    if (!dropdown.parentElement.contains(event.target)) closeDropdown(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !menu.hidden) closeDropdown(true);
  });
  nav.addEventListener("focusout", function (event) {
    if (!dropdown.parentElement.contains(event.relatedTarget)) closeDropdown(false);
  });
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeDropdown(false);
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
