let mobileNav = document.querySelector(".mobile-nav");
let links = document.querySelectorAll(".desktop-nav .link");

mobileNav.addEventListener("click", function () {
  document.body.classList.toggle("change-mobile-nav");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("change-mobile-nav");
  });
});
