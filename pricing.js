const slider = document.querySelector(".slider");
const numInput = document.querySelector(".number-input");
let totalPrice = document.querySelector("[item-total-price]");
const rangeValues = [...document.querySelectorAll("[item-max]")];
console.log(rangeValues);
console.log(totalPrice);

let cValue = 1;

console.log(rangeValues);
let sumPrice = 0;

const calculate = () => {
  //let totalPrice = 0;

  /*
  if (cValue <= 99) {
    totalPrice = cValue * 3.95;
  } else if (cValue >= 100 && cValue <= 499) {
    totalPrice = 99 * 3.95 + (cValue - 99) * 3.5;
  } else if (cValue >= 500) {
    totalPrice = 99 * 3.95 + 400 * 3.5 + (cValue - 499) * 3.25;
  }

  totalPriceC.textContent = totalPrice.toFixed(2);
  */

  for (let i = 0; i < rangeValues.length; i++) {
    //console.log(Number(rangeValues[i].textContent));
    totalPrice.textContent = "4";
    if (Number(rangeValues[i].textContent) >= cValue) {
      //console.log(rangeValues[i].textContent, cValue);
      let currPrice = rangeValues[i].parentElement.parentElement.querySelector(
        "[item-price]"
      ).textContent;
      totalPrice.textContent = Number(cValue * currPrice).toFixed(2);
      break;
    }
  }
};

slider.addEventListener("input", () => {
  console.log("Current value is: " + slider.value);
  numInput.value = slider.value;
  cValue = Number(slider.value);
  calculate();
});

numInput.addEventListener("input", () => {
  console.log("Current valuess is: " + numInput.value);
  slider.value = numInput.value;
  cValue = Number(numInput.value);
  calculate();
});
