function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = <HTMLElement>document.querySelector("body");

const refs: Irefs = {
  body: <HTMLElement>document.querySelector("body"),
  btn: <HTMLElement>document.querySelector(".change-color"),
  color: <HTMLElement>document.querySelector(".color"),
};

refs.btn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  (<HTMLTextAreaElement>refs.color).textContent = color;
}

export {};
