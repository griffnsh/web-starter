const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const burgerBar = document.querySelectorAll(".hamburger-bar");

burger.addEventListener("click", toggle => {
  nav.classList.toggle("active");
  navList.classList.toggle("nav-active");
  burgerBar.classList.toggle("bar-toggle")
})

// burgerBar.addEventListener("click", () => {
//   console.log("test");
// })

function toggleHamburger() {
 burgerBar.forEach(burgerBar => burgerBar.classList.toggle('hamburger-bar-toggle'))
}

burger.addEventListener('click', toggleHamburger)