import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const number = document.querySelector(".number--js");
const add = document.querySelector(".add--js");
const remove = document.querySelector(".remove--js");

let counter = 0;

number.innerHTML = counter;

add.addEventListener("click", () => {
  counter++;
  number.innerHTML = counter;
});

remove.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    number.innerHTML = counter;
  } else {
    counter = 0;
  }
});
