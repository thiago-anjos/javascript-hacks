// Destructuring assignment is a feature in JavaScript that allows you to unpack values from arrays, or properties from objects, into distinct variables. 
// This can make your code more readable and concise.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [x, y, ...rest] = numbers;
console.log(x); // Outputs: 1
console.log(y); // Outputs: 2
console.log(rest); // Outputs: [3, 4, 5, 6, 7, 8, 9, 10]