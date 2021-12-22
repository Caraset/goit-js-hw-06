var _a;
const refs = {
    form: document.querySelector(".login-form"),
};
const a = {};
(_a = refs.form) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const target = e.currentTarget;
    for (let i = 0; i < target.elements.length - 1; i += 1) {
        if (refs.form.elements[i].value ===
            "") {
            alert("Все поля должны быть заполнены!");
            return;
        }
    }
    const formData = new FormData(target);
    formData.forEach((x, y) => {
        a[y] = x;
    });
    refs.form.reset();
    console.log(a);
}
export {};
