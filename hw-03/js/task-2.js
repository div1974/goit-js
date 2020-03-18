const countProps = function(obj) {
  // твой код
  const keys = Object.keys(obj);
  let countKeys = 0;

  for (const key of keys) {
    countKeys += 1;
  }
  return countKeys;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
