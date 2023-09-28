document.querySelector("body").remove();
if (document.querySelector(".nav-burger-wrapper")) {
  document
    .querySelector(".nav-burger-wrapper")
    .addEventListener("click", () => {
      document.querySelector(".nav-container").classList.toggle("nav-open");
    });
}

const navLinks = [...document.querySelectorAll(".nav-link")];

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link.querySelector(".nav-link-line"), {
      width: "100%",
      ease: "expo.inOut",
      duration: 0.5
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(".nav-link-line", {
      width: "0%",
      ease: "expo.inOut",
      duration: 0.2
    });
  });
});
