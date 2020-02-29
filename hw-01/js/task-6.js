let input;
let total = 0;

do {
  input = prompt("Введите число", "1");
  // debugger;

  if (Number(input)) {
    total = total + Number(input);
  } else {
    if (input !== null) {
      alert(`"${input}" не является числом. Введите число!`);
    }
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
