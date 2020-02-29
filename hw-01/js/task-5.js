let delivery = prompt("В какую страну вы хотите оформить доставку?");
if (delivery.includes("")) {
  delivery = delivery.trim();
}
let cost;

if (delivery === null) {
  console.log("Отменено пользователем!");
} else {
  if (delivery !== "") {
    delivery = delivery.toLowerCase();
    switch (delivery) {
      case "китай":
        cost = 100;
        break;

      case "чили":
        cost = 250;
        break;

      case "австралия":
        cost = 170;
        break;

      case "индия":
        cost = 80;
        break;

      case "ямайка":
        cost = 120;
        break;

      default:
        alert("В вашей стране доставка не доступна");
    }

    // debugger;
    delivery = delivery[0].toUpperCase() + delivery.substr(1);
    if (cost) {
      let amount;
      do {
        amount = prompt("Какое количество товара хотите заказать?", "1");
        if (Number.isNaN(Number(amount))) {
          alert("Введите число");
        } else {
          if (amount > 0) {
            alert(
              `Доставка в ${delivery} будет стоить ${cost * amount} кредитов`
            );
            break;
          } else {
            alert("Введите число больше 0");
          }
        }
      } while (amount !== null);
      if (amount === null) {
        alert("Отменено ползователем!");
      }
    }
  } else {
    alert("В вашей стране доставка не доступна");
  }
}
