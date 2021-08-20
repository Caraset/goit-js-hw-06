const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onBtnClickIncrement() {
  counterValue += 1;

  refs.value.textContent = counterValue;
}

function onBtnClickDecrement() {
  counterValue -= 1;

  refs.value.textContent = counterValue;
}

refs.incrementBtn.addEventListener("click", onBtnClickIncrement);

refs.decrementBtn.addEventListener("click", onBtnClickDecrement);
