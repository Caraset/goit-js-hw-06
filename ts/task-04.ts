const refs: Irefs = {
  incrementBtn: <HTMLElement>(
    document.querySelector('[data-action="increment"]')
  ),
  decrementBtn: <HTMLElement>(
    document.querySelector('[data-action="decrement"]')
  ),
  value: <HTMLElement>document.querySelector("#value"),
};

let counterValue: number = 0;

function onBtnClickIncrement(): void {
  refs.value.textContent = `${(counterValue += 1)}`;
}

function onBtnClickDecrement(): void {
  refs.value.textContent = `${(counterValue -= 1)}`;
}

refs.incrementBtn?.addEventListener("click", onBtnClickIncrement);

refs.decrementBtn?.addEventListener("click", onBtnClickDecrement);
