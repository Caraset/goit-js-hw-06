const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfConstructedElements = ingredients.map((element) => {
  const a = document.createElement("li");
  a.textContent = element;
  return a;
});

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...arrayOfConstructedElements);
