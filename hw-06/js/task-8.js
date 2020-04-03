import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users.filter(user => {
    const friend = friend => friend === friendName;
    return user.friends.some(friend);
  })
  .map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
