import users from "./users.js";

const getSortedUniqueSkills = users => {
  // твой код
  return users
    .reduce((acc, el) => {
      acc.push(...el.skills);
      return acc;
    }, [])
    .filter((el, ind, arr) => arr.indexOf(el) === ind)
    .sort((a, b) => (a > b ? 1 : -1));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
