const inputEl = document.querySelector("#validation-input");

inputEl?.addEventListener("blur", onInputValidation);

function onInputValidation(this: HTMLElement, event: Event) {
  const valueLength = (<HTMLTextAreaElement>event.currentTarget).value.length;
  const requiredLength = Number((<HTMLElement>inputEl).dataset.length);

  (<HTMLElement>this).classList.add("invalid");
  this.classList.remove("valid");

  if (valueLength == requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}
