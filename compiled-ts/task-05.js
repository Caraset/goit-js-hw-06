var _a;
const refs = {
    inputEl: document.querySelector("#name-input"),
    nameEl: document.querySelector("#name-output"),
};
(_a = refs.inputEl) === null || _a === void 0 ? void 0 : _a.addEventListener("input", onInputEvent);
function onInputEvent(event) {
    refs.nameEl.textContent = (event === null || event === void 0 ? void 0 : event.currentTarget).value;
    refs.nameEl.textContent === ""
        ? (refs.nameEl.textContent = "Anonymous")
        : null;
}
export {};
