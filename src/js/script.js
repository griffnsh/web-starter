const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const burgerBar = document.querySelectorAll(".hamburger-bar");
const header = document.querySelector(".header")

burger.addEventListener("click", toggle => {
  nav.classList.toggle("active");
  navList.classList.toggle("nav-active");
  burgerBar.classList.toggle("bar-toggle")
})

function toggleHamburger() {
 burgerBar.forEach(burgerBar => burgerBar.classList.toggle('hamburger-bar-toggle'))
}

burger.addEventListener('click', toggleHamburger)

// Sticky Nav
window.onscroll = function() {stickyNav()};

const sticky = header.offsetTop;

function stickyNav() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}