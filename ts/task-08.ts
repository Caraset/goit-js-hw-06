const refs: Irefs = {
  form: <HTMLTextAreaElement>document.querySelector(".login-form"),
};

interface IformData {
  [key: string]: FormDataEntryValue;
}

const a: IformData = {};

refs.form?.addEventListener("submit", onFormSubmit);

function onFormSubmit(e: Event) {
  e.preventDefault();

  const target = <HTMLFormElement>e.currentTarget;

  for (let i = 0; i < target.elements.length - 1; i += 1) {
    if (
      (<HTMLTextAreaElement>(<HTMLFormElement>refs.form).elements[i]).value ===
      ""
    ) {
      alert("Все поля должны быть заполнены!");
      return;
    }
  }

  const formData = new FormData(target);

  formData.forEach((x, y) => {
    a[y] = x;
  });

  (<HTMLFormElement>refs.form).reset();

  console.log(a);
}

export {};
