let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("hide");
  console.log(nav.classList);
}
