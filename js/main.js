let humbergerToggle = document.querySelector(".mobile-nav");
let links = document.querySelectorAll(".desktop-nav .link");

humbergerToggle.addEventListener("click", function () {
  document.body.classList.toggle("change-mobile-nav");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("change-mobile-nav");
  });
});
