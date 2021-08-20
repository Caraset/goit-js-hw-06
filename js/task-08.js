const refs = {
  form: document.querySelector(".login-form"),
};

const a = {};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < e.currentTarget.elements.length - 1; i += 1) {
    if (refs.form.elements[i].value === "") {
      alert("Все поля должны быть заполнены!");
      return;
    }
  }

  const formData = new FormData(e.currentTarget);

  formData.forEach((x, y) => (a[y] = x));

  refs.form.reset();

  console.log(a);
}
