let credits = 23580;
const pricePerDroid = 3000;
let qtyDroid;
let checkQtyDroid;
let totalPrice;
qtyDroid = prompt("Какое кол-во дроидов Вы хотите купить?");
// debugger;

if (qtyDroid === null) {
  console.log("Отменено пользователем!");
} else {
  checkQtyDroid = Number.isNaN(Number(qtyDroid));
  switch (checkQtyDroid) {
    case true:
      console.log(`Ваш выбор "${qtyDroid}" не число. Выберите число!`);
      break;

    case false:
      qtyDroid = Number(qtyDroid);
      totalPrice = 3000 * qtyDroid;
      if (totalPrice > credits) {
        console.log("У Вас недостаточно средств!");
        break;
      } else if (qtyDroid > 0) {
        credits = credits - totalPrice;
        alert(
          `Вы купили ${qtyDroid} дроидов, на счету осталось ${credits} кредитов`
        );
        break;
      } else {
        console.log("Cделайте выбор количества больше 0!");
        break;
      }
  }
}
