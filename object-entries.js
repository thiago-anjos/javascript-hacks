// it return an array of key-value pairs
//In this example, Object.entries() is used to convert the object into an array of key-value pairs.

let user = {
    name: "John",
    age: 30
};
console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]

//Object.fromEntries()
//Object.fromEntries() performs the reverse operation of Object.entries(). It transforms a list of key-value pairs into an object.

let entries = [ [ 'name', 'John' ], [ 'age', 35 ] ]

console.log(Object.fromEntries(entries)) // { name: 'John', age: 35 }