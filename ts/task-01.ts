const categoriEl: NodeListOf<Element> = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriEl.length}`);

categoriEl.forEach((el: Element): void => {
  console.log(
    `Category: ${el.firstElementChild?.textContent}\nElements: ${el.lastElementChild?.children.length}`
  );
});
