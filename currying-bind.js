// Function currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions,
// each with a single argument. This can be achieved using the bind() method.

function myPet(petName, favoriteFood) {
  return `My pet's name is ${petName} and they love to eat ${favoriteFood}`;
}

let myPetDescription = myPet.bind(this, "Foguinho");
console.log(myPetDescription("Chocolate"));
console.log(myPetDescription("Pasta"));

function makePetDescription(name, food, age) {
  return `My pet's name is ${name}, he likes to eat ${food}, and he is ${age} years old.`;
}

let myPetDescription2 = makePetDescription.bind(this, "Gelinho", "Chocolate");
console.log(myPetDescription2(3));
console.log(myPetDescription2(4));

// maybe don't need use bind?

function myPet2(name) {
  return function (food) {
    return `My pet's name is ${name} and it love to eat ${food}`;
  };
}

let foguinho = myPet2("Foguinho");
const result = foguinho("Chocolate");
console.log(result);
