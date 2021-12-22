const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const fontSize = parseFloat(window.getComputedStyle(textEl).fontSize);
inputEl.value = String(fontSize);
inputEl.addEventListener("input", onInputChangeSize);
function onInputChangeSize(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}
export {};
