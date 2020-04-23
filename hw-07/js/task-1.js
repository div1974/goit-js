const categories = document.querySelectorAll(".item");

console.log(`В списке ${categories.length} категории.`);
// console.log(categories);

categories.forEach((el) => {
  const headers = el.querySelectorAll("h2");
  const items = el.querySelectorAll(".item > ul >li");

  console.log(`Категория: ${headers[0].textContent}`);
  console.log(`Количество элементов: ${items.length}`);
});
