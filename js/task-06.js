const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = inputEl.dataset.length;

  this.classList.add("invalid");
  this.classList.remove("valid");

  if (valueLength == requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }

  // if (valueLength == 0) {
  //   this.classList = "";
  // }
}
