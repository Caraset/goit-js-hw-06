function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

refs.btn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  refs.color.textContent = color;
}
