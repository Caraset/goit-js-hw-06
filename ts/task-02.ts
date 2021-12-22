const ingredients: string[] = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfConstructedElements: HTMLLIElement[] = ingredients.map(
  (element): HTMLLIElement => {
    const a: HTMLLIElement = document.createElement("li");
    a.textContent = element;
    return a;
  }
);

const ingredientsEl: HTMLElement | null =
  document.querySelector("#ingredients");

ingredientsEl?.append(...arrayOfConstructedElements);
