const TOTAL = 100;
let ordered;

ordered = prompt("ПОЖАЛУЙСТА, ЗАКАЖИТЕ КОЛИЧЕСТВО");
// debugger;

if (ordered === null) {
  alert("Жаль, что Вы не сделали выбор количества");
} else {
  if (Number.isNaN(Number(ordered))) {
    alert(`Ваш выбор '${ordered}' не число. Выберите число!`);
  }

  if (ordered <= 0) {
    alert("Cделайте выбор количества больше 0!");
  }

  if (ordered > TOTAL) {
    alert("На складе недостаточно товаров!");
  } else {
    if (ordered > 0) {
      alert(`Заказ ${ordered}шт оформлен, с Dами свяжется менеджер`);
    }
  }
}
