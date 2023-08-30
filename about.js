gsap.registerPlugin(ScrollTrigger);

const aboutImages = [...document.querySelectorAll("[about-image]")];

aboutImages.forEach((img) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: img,
      start: "top 95%",
      end: "bottom bottom",
      scrub: 1
    }
  });

  tl.to(img.querySelector(".image-overlay"), {
    height: 0,
    duration: 1
  });
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

const fx11Titles = [...document.querySelectorAll("[data-effect10]")];

fx11Titles.forEach((title) => {
  const chars = title.querySelectorAll(".char");
  wrapElements(chars, "span", "char-wrap");

  gsap.fromTo(
    chars,
    {
      "will-change": "transform",
      transformOrigin: "0% 50%",
      xPercent: 105
    },
    {
      duration: 1,
      ease: "expo",
      xPercent: 0,
      stagger: 0.022,
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        end: "top top+=10%",
        toggleActions: "play resume resume reset"
      }
    }
  );
});
