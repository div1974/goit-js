const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let input;

input = prompt("Пожалуйста, введите те пароль!");
// debugger;

if (input === null) {
  message = "Отменено пользователем!";
} else {
  if (input === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
}

alert(message);
