let originalArray = [1, 2, 3, 4, 5];
let newArray = [...originalArray];
console.log(newArray);

// spread operator in objects
let originalObject = { name: "John", age: 30 };
let newObject = { ...originalObject, city: "New York" };
console.log(newObject);

// spread operator merge two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
