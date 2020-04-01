import users from "./users.js";
// console.log(users);
const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
