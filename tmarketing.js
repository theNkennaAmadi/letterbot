// A function to generate the path data based on your points.
/*
function generatePathData(points, svgWidth, svgHeight) {
  let pathData = `M ${(points[0].left / 100) * svgWidth} ${
    (points[0].top / 100) * svgHeight
  }`;
  for (let i = 1; i < points.length; i++) {
    pathData += ` L ${(points[i].left / 100) * svgWidth} ${
      (points[i].top / 100) * svgHeight
    }`;
  }
  pathData += ` L ${(points[0].left / 100) * svgWidth} ${
    (points[0].top / 100) * svgHeight
  }`; // Loop back to the first point
  console.log(pathData);
  return pathData;
}
*/
/*
function generatePathData(points, svgWidth, svgHeight) {
  let pathData = `M ${(points[0].left / 100) * svgWidth} ${
    (points[0].top / 100) * svgHeight
  }`;

  for (let i = 1; i < points.length; i++) {
    const controlPoint = {
      left: (points[i - 1].left + points[i].left) / 2,
      top: (points[i - 1].top + points[i].top) / 2
    };

    pathData += ` Q ${(controlPoint.left / 100) * svgWidth} ${
      (controlPoint.top / 100) * svgHeight
    }, 
                   ${(points[i].left / 100) * svgWidth} ${
      (points[i].top / 100) * svgHeight
    }`;
  }

  // Return to the first point
  const controlPoint = {
    left: (points[points.length - 1].left + points[0].left) / 2,
    top: (points[points.length - 1].top + points[0].top) / 2
  };
  pathData += ` Q ${(controlPoint.left / 100) * svgWidth} ${
    (controlPoint.top / 100) * svgHeight
  }, 
               ${(points[0].left / 100) * svgWidth} ${
    (points[0].top / 100) * svgHeight
  }`;

  return pathData;
}

// Define the points based on your CSS top and left percentages.
const points = [
  { top: 26, left: 17 }, // usa
  { top: 35, left: 21 }, // colombia
  { top: 38, left: 15 }, // mexico
  { top: 45, left: 19 }, // panama
  { top: 64, left: 28 }, // brasil
  { top: 68, left: 34 }, // venezuela
  { top: 77, left: 30 } // argentina
];

// SVG dimensions
const svgWidth = 3387;
const svgHeight = 1270;

// Generate the new path data.
const newPathData = generatePathData(points, svgWidth, svgHeight);

// Update the 'd' attribute of the SVG path element to set the new path.
document.querySelector(".planePath").setAttribute("d", newPathData);
*/

/* 
 { top: 40, left: 53 }, // arabia
  { top: 31, left: 57 }, // turquia
  { top: 26, left: 73 }, // russia
  { top: 36, left: 65 }, // russia2
  { top: 40, left: 72 }, // china
  { top: 27, left: 84 }, // japon
  { top: 74, left: 84 }, // australia
  { top: 50, left: 46 }, // egypt
  { top: 57, left: 50 }, // nigeria
  { top: 70, left: 54 } // south-africa

*/
