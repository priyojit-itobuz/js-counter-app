let num = document.getElementById("num");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let count = 0;

function color() {
  num.style.color = count < 0 ? "red" : count > 0 ? "green" : "black";
}

function decreaseHandler() {
  count = count - 1;
  num.innerHTML = count;
  color();
}

function increaseHandler() {
  count = count + 1;
  num.innerHTML = count;
  color();
}

function resetHandler() {
  count = 0;
  num.innerHTML = count;
  color();
}
