"use strict";
var _a, _b;
const refs = {
    incrementBtn: (document.querySelector('[data-action="increment"]')),
    decrementBtn: (document.querySelector('[data-action="decrement"]')),
    value: document.querySelector("#value"),
};
let counterValue = 0;
function onBtnClickIncrement() {
    refs.value.textContent = `${(counterValue += 1)}`;
}
function onBtnClickDecrement() {
    refs.value.textContent = `${(counterValue -= 1)}`;
}
(_a = refs.incrementBtn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", onBtnClickIncrement);
(_b = refs.decrementBtn) === null || _b === void 0 ? void 0 : _b.addEventListener("click", onBtnClickDecrement);
