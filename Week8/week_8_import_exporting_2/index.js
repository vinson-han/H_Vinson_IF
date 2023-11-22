import _ from "lodash";

console.log(_.subtract(10, 5));
console.log(_.multiply(5, 2));
console.log(_.divide(30, 2));

let friendlist = [
  { firstName: "Jennifer", lastName: "Lawrece", age: 28, gender: "female" },
  { firstName: "Brad", lastName: "Pitt", age: 5, gender: "male" },
  { firstName: "Quentin", lastName: "Tarantino", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

let age = _.find(friendlist, function (friendlist) {
  return friendlist.age < 41;
});

_.reverse(friendlist);

console.log(friendlist);
