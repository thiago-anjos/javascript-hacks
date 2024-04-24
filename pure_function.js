// pure functions are functions which accept argument(s), compute a value based on the argument(s), and return a value
// the return value will always be the same when called with the same arguments.
// not depend on any state or global variables

// example of a pure function
function square(number) {
  return number * number;
}

console.log(square(2)); // always returns 4 when called with 2
console.log(square(3)); // always returns 9 when called with 3

// example of a not pure function
function randomChoice(chooseNumber) {
  return Math.floor(Math.random() * chooseNumber);
}
console.log(randomChoice(10)); // returns a random number between 0 and 9

// Resolve a problem with inpure function
// given this

let student = {
  name: "John",
  age: 30,
  grade: 8,
};

// take a look at the function changeGrande alters the argument that was passed in? That means the function is creating a side effect therefore it is impure.
function changeGrade(student) {
  student.grade = student.grade + 1;
  return student;
}

console.log(changeGrade(student));
console.log(student);

// we can solve this, creating a new object
let student2 = {
  name: "John",
  age: 30,
  grade: 8,
};

//instead of altering the exact object that was passed in and causing a side effect, we make the update desired and return a new object. Pure!

function changeGrade2(student) {
  return { ...student, grade: student.grade + 1 };
}

console.log(changeGrade2(student2));
console.log(student2);
