let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

let addActive = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      let currentActive = document.querySelector(".nav-links a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.nav-container a[href="#${entry.target.getAttribute("id")}"]`
      );
      newActive.classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(addActive, options);

let sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});

// Navigation Toggle Button
let toggleMenu = document.getElementsByClassName("menu-toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];
toggleMenu.addEventListener("click", () => {
  console.log(navLinks);
  navLinks.classList.toggle("show-nav");
});
