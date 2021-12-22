const refs: Irefs = {
  inputEl: <HTMLElement>document.querySelector("#name-input"),
  nameEl: <HTMLElement>document.querySelector("#name-output"),
};

refs.inputEl?.addEventListener("input", onInputEvent);

function onInputEvent(event: Event): void {
  refs.nameEl.textContent = (<HTMLTextAreaElement>event?.currentTarget).value;

  (<HTMLElement>refs.nameEl).textContent === ""
    ? ((<HTMLElement>refs.nameEl).textContent = "Anonymous")
    : null;
}

export {};
