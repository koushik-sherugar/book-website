burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navitems = document.querySelector(".nav-items");
rightalign = document.querySelector(".right-align");

burger.addEventListener("click", () => {
  rightalign.classList.toggle("v-class-resp");
  navitems.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
