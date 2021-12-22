function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs: Irefs = {
  boxesEl: <HTMLElement>document.querySelector("#boxes"),
  inputEl: <HTMLElement>document.querySelector("[type='number']"),
  createBtnEl: <HTMLElement>document.querySelector("[data-create]"),
  clearBtnEl: <HTMLElement>document.querySelector("[data-destroy]"),
};

let quantity = 0;
let boxesStorage: HTMLElement[] = [];

refs.inputEl.addEventListener("input", onInputGetQuantity);
refs.createBtnEl.addEventListener("click", onClickMakeBoxes);
refs.clearBtnEl.addEventListener("click", destroyBoxes);

function onInputGetQuantity(event: Event) {
  const value = Number((<HTMLTextAreaElement>event.currentTarget).value);
  quantity = value;
}

function onClickMakeBoxes() {
  let tempStorage: HTMLElement[] = [];

  // создаем временный масив с нужным количеством дивов
  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement("div");

    tempStorage.push(box);
  }

  // функция для наполнения масивы дивов нужными характеристиками
  function addStylesToDiv(el: HTMLElement): HTMLElement {
    const elementSize = 30 + 10 * boxesStorage.indexOf(el);

    // создает рандомный цвет в формате rgb
    function getRandomColor() {
      // рандомное число для цвета
      function getRandomInt() {
        return Math.floor(Math.random() * 255);
      }

      return `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    }

    // el.style.backgroundColor = getRandomColor();

    el.style.backgroundColor = getRandomHexColor();
    el.style.width = `${elementSize}px`;
    el.style.height = `${elementSize}px`;
    el.style.marginTop = "15px";

    return el;
  }

  // добавляем дивы в общее хранилище
  boxesStorage.push(...tempStorage);

  // наполняем дивы в временном масиве нужными характеристиками
  tempStorage = tempStorage.map(addStylesToDiv);

  // добавляем все дивы на страницу
  refs.boxesEl.append(...boxesStorage);

  (<HTMLTextAreaElement>refs.inputEl).value = "";
}

function destroyBoxes() {
  boxesStorage.forEach((el) => refs.boxesEl.removeChild(el));
  boxesStorage = [];

  (<HTMLTextAreaElement>refs.inputEl).value = "";
}

export {};
