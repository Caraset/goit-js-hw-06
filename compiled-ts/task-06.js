"use strict";
const inputEl = document.querySelector("#validation-input");
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener("blur", onInputValidation);
function onInputValidation(event) {
    const valueLength = event.currentTarget.value.length;
    const requiredLength = Number(inputEl.dataset.length);
    this.classList.add("invalid");
    this.classList.remove("valid");
    if (valueLength == requiredLength) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    }
}
