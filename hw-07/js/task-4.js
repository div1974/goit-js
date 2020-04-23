let counterValue = 0;

const btnDecr = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecr);
const btnIncr = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

btnDecr.addEventListener("click", decrement);
btnIncr.addEventListener("click", increment);

function increment(counterValue) {
  
  counterValue = Number(counter.textContent)+1;
  counter.textContent = counterValue;

}
function decrement(counterValue) {

  counterValue = Number(counter.textContent)-1;
  counter.textContent = counterValue;
}

