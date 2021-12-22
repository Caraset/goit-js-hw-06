const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSize = parseFloat(
  window.getComputedStyle(<HTMLElement>textEl).fontSize
);

(<HTMLTextAreaElement>inputEl).value = String(fontSize);

(<HTMLElement>inputEl).addEventListener("input", onInputChangeSize);

function onInputChangeSize(event: Event) {
  (<HTMLElement>textEl).style.fontSize = `${
    (<HTMLTextAreaElement>event.currentTarget).value
  }px`;
}

export {};
