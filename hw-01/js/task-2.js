const TOTAL = 100;
let ordered;
let ordered1;

ordered = prompt("ПОЖАЛУЙСТА, ЗАКАЖИТЕ КОЛИЧЕСТВО");
// debugger;

if (ordered === null) alert("Жаль, что Вы не сделали выбор количества");
else {
  ordered1 = Number.isNaN(Number(ordered));
  switch (ordered1) {
    case true:
      alert(`Ваш выбор "${ordered}" не число. Выберите число!`);
      break;

    case false:
      ordered = Number(ordered);
      if (ordered > TOTAL) {
        alert("На складе недостаточно товаров!");
        break;
      } else if (ordered > 0) {
        alert(`Заказ ${ordered}шт оформлен, с вами свяжется менеджер`);
        break;
      } else {
        alert("Cделайте выбор количества больше 0!");
        break;
      }
  }
}
