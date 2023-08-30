const init = () => {
  const marquee = [...document.querySelectorAll('[wb-data="marquee"]')];
  marquee.map((marquee) => {
    if (!marquee) {
      return;
    }
    const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
      return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;

    const playMarquee = () => {
      let progress = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();
      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("width"),
        10
      );
      const gap = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
        10
      );
      const distanceToTranslate = -1 * (gap + width);

      tween = gsap.fromTo(
        marquee.children,
        { x: 0 },
        { x: distanceToTranslate, duration, ease: "none", repeat: -1 }
      );
      tween.progress(progress);
    };
    playMarquee();

    function debounce(func) {
      var timer;
      return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500,
          event
        );
      };
    }

    window.addEventListener("resize", debounce(playMarquee));
  });

  // console.log({ marquee, marqueeContent });
};

document.addEventListener("DOMContentLoaded", init);

gsap.registerPlugin(MotionPathPlugin);

/*
gsap.to(".paper-plane-1", {
  duration: 30,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: [
      { x: 100, y: 0 },
      { x: 300, y: 10 },
      { x: 500, y: 100 },
      { x: 750, y: 300 },
      { x: 350, y: 350 },
      { x: 600, y: 150 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: 250 }
    ],
    curviness: 2,
    autoRotate: true
  }
});
*/

gsap.to(".preloader-line", { duration: 9, width: "100%" });

const elements = [...document.querySelectorAll(".preloader-text")]; // fill this array with your elements
const duration = 10; // entire animation duration in seconds
let maxDelay = 0; // to keep track of the max delay

elements.forEach((element, index) => {
  // Calculate delay for each element
  const delay = (duration / elements.length) * index;
  maxDelay = Math.max(maxDelay, delay);

  // First, set all elements to opacity 0
  gsap.set(element, { opacity: 0, duration: 0 });

  // Then, create a timeline for each element
  gsap
    .timeline()
    .to(element, {
      opacity: 1,
      delay: delay,
      duration: duration / elements.length
    })
    .to(element, { opacity: 0, delay: (duration / elements.length) * 0 });
});

// After the entire duration (maxDelay), reduce the width of ".preloader-line-wrapper" to 0
gsap.to(".preloader-line-wrapper", {
  width: "0%",
  delay: duration + 0.75,
  duration: 0.8,
  ease: "expo.inOut"
});

gsap.to(".preloader-wrapper", {
  height: 0,
  display: "none",
  delay: duration + 1.4,
  duration: 0.75,
  ease: "expo.inOut"
});

/*
gsap.to(".paper-plane-1", {
  duration: 20,
  //repeat: 12,
  //repeatDelay: 3,
  // yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#plane-path",
    align: "#plane-path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
*/

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.to(".paper-plane-1", {
  scrollTrigger: {
    trigger: ".main",
    markers: false,
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom 80%", // when the bottom of the trigger hits the bottom of the viewport
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    onUpdate: (self) => {
      //tl.vars.motionPath.autoRotate = self.direction === 1 ? true : [180, 0];
    }
  },
  //duration: 20,
  //repeat: 12,
  //repeatDelay: 3,
  // yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#plane-path-2",
    align: "#plane-path-2",
    //autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});

/*
function updateDiv() {
  var inputText = document.getElementById("myInput").value;
  document.getElementById("myDiv").innerText = inputText;
}

const updateText = () => {};
*/

const paper = document.querySelector(".home-paper");
let previousLineCount = 1;

function getVisibleLines(textarea) {
  let style = window.getComputedStyle(textarea);
  let lineHeight = parseFloat(style.lineHeight);
  return Math.floor(textarea.scrollHeight / lineHeight);
}

previousLineCount = 0;
let enterCount = 0;
document.getElementById("typewriter").addEventListener("input", (e) => {
  let inputText = e.currentTarget.value;
  //console.log(inputText);
  const lines = inputText.split("\n").length;
  console.log(lines);

  // Check if the number of lines exceeds the limit (5 in this case)
  if (lines > 4) {
    gsap.to(".warning-text", { opacity: 1 });
  } else {
    gsap.to(".warning-text", { opacity: 0 });
  }
  if (lines > 5) {
    // Split the textarea content into lines and keep only the first 5 lines
    const limitedContent = inputText.split("\n").slice(0, 6).join("\n");
    inputText = limitedContent; // Set the textarea content to the limited value
    const lastLineIndex = inputText.lastIndexOf("\n");
    e.currentTarget.value = inputText.substring(0, lastLineIndex);
  }

  paper.textContent = inputText;
  //paper.innerHTML = `<p>${inputText}</p>`;
  if (e.key === "Enter") {
    //enterCount++;
    // console.log("Increased");
  }
  //let currentLineCount = Math.floor(paper.textContent.length / 40) + enterCount;
  //console.log(currentLineCount);
  if (lines !== previousLineCount) {
    gsap.to(paper, { y: -lines * 20 });
  }
  previousLineCount = lines;
});

// Get the select field
var selectField = document.getElementById("font-select");

// Add an event listener for the 'change' event
selectField.addEventListener("change", function () {
  // Get the selected option's text
  var selectedText = this.options[this.selectedIndex].text;

  // Log the selected text
  console.log(selectedText);

  paper.style.fontFamily = selectedText;
});
