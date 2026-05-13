(function () {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("categoria");
  if (!nome) return;
  const label = decodeURIComponent(nome).trim();
  const h1 = document.querySelector(".category-header h1");
  if (h1) h1.textContent = "Categoria: " + label;
  document.title = "Categoria: " + label + " — Habit";
})();

const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");

if (menuToggle && closeMenu && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
}

document.querySelectorAll(".filter-tabs a").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".filter-tabs a").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
  });
});
