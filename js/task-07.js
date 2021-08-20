const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// textEl.style.fontSize = "50px";

inputEl.addEventListener("input", onInputChangeSize);

function onInputChangeSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value * 0.29}px`;
}
