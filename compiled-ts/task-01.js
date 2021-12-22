"use strict";
const categoriEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriEl.length}`);
categoriEl.forEach((el) => {
    var _a, _b;
    console.log(`Category: ${(_a = el.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent}\nElements: ${(_b = el.lastElementChild) === null || _b === void 0 ? void 0 : _b.children.length}`);
});
