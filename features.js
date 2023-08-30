// create
let mm = gsap.matchMedia();

let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".flex-horizontal",
    start: "top 10%", // when the top of the trigger hits the top of the viewport
    end: "bottom top", // end after scrolling 500px beyond the start
    scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

mm.add("(min-width: 768px)", () => {
  tl.to(".track-vertical", { y: "-5%" }, "<");
  // add animations and labels to the timeline
  tl.addLabel("start").to(".track-vertical-alt", { y: "-15%" });
  // add a media query. When it matches, the associated function will run
});

const wrapElements = (elems, wrapType, wrapClass) => {
  elems.forEach((char) => {
    const wrapEl = document.createElement(wrapType);
    wrapEl.classList = wrapClass;
    char.parentNode.appendChild(wrapEl);
    wrapEl.appendChild(char);
  });
};

Splitting();

const fx10Titles = [...document.querySelectorAll("[data-effect14]")];

fx10Titles.forEach((title) => {
  const chars = title.querySelectorAll(".char");
  gsap.to(".features-heading", { opacity: 1 });
  gsap.fromTo(
    chars,
    {
      "will-change": "opacity",
      opacity: 0,
      filter: "blur(20px)"
    },
    {
      duration: 0.1,
      ease: "power1.inOut",
      opacity: 1,
      filter: "blur(0px)",
      stagger: { each: 0.015, from: "random" },
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        end: "center center",
        toggleActions: "play resume resume reset"
      }
    }
  );
});
