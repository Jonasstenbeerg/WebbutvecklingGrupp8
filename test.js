

const svg = document.querySelector("path");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {

button.classList.add("animating");
svg.classList.add("svg")
setTimeout(() => {  button.classList.remove("animating"); svg.classList.remove("svg"); }, 2000);

});

var path = document.querySelector("path");
var lenght = path.getTotalLength();

console.log(lenght)

32.906166076660156