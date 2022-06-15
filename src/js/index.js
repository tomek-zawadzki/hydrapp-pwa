import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const number = document.querySelector(".number--js");
const add = document.querySelector(".add--js");
const remove = document.querySelector(".remove--js");
const time = document.querySelector("time--js");

const key = new Date().toLocaleString().slice(0, 10);
console.log(key);

const localStorageValue = localStorage.getItem(key);

let counter = 0;

if (localStorageValue) {
  counter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

number.innerHTML = counter;

add.addEventListener("click", () => {
  counter++;
  number.innerHTML = counter;
  localStorage.setItem(key, counter);
});

remove.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    number.innerHTML = counter;
  } else {
    number.innerHTML = counter;
    localStorage.setItem(key, counter);
  }
});
