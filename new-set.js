// new set to remove duplicate values from array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);