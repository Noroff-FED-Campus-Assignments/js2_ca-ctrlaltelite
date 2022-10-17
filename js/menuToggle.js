const sideMenu = document.querySelector(".side-menu");

document.querySelector(".menu-icon-closed").addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.add("flex");
});

document.querySelector(".menu-icon-open").addEventListener("click", () => {
  sideMenu.classList.remove("flex");
  sideMenu.classList.add("hidden");
});
