const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];


const ingr = document.querySelector("#ingredients");
const allItems = ingredients.map((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  return liItem;
});


ingr.append(...allItems);

