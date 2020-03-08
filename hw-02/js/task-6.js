let input;
const numbers = [];
let total = 0;


do {
  input = prompt("Введите число", "1");
  // debugger;
  

  if (Number(input)) {
    numbers.push(input);
    
  } else {
    if (input !== null) {
      alert(`"${input}" не является числом. Введите число!`);
    }
  }
} while (input !== null);
if (numbers !== []){
  for (const number of numbers) {
  total = total + Number(number);
}
alert(`Общая сумма чисел равна ${total}`); 
}
else {
  alert('Общая сумма чисел равна 0');
}

