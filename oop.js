let person = {
  eats: true,
  haslegs: true,
  walks() {
    console.log("Can walk");
  },
};

let man = {
  hasBreast: false,
  hasBeard: true,
};

//set the prototype of man to person object
man.__proto__ = person;

let samuel = {
  age: 30,
};

samuel.__proto__ = man;

//access walk method from samuel
samuel.walks();
//access hasBeard from samuel
console.log(samuel.hasBeard);

//Using Object.create() to set the prototype
//The Object.create() creates a new object and allows you to use existing objects as the new object's prototype.
const user = {
  isLoggedIn: false,
  greetUser() {
    console.log(`Howdy ${this.name} !`);
  },
};
//create a new object and set the prototype
const admin = Object.create(user);

//https://dev.to/efkumah/why-javascript-is-a-prototype-based-oop-4b4g
