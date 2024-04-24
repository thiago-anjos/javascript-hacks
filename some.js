const products = [
  { title: "Cucumber", price: 1, quantity: 1 },
  { title: "Tomato", price: 2, quantity: 2 },
  { title: "Mustard", price: 3, quantity: 3 },
  { title: "Potato", price: 4, quantity: 1 },
  { title: "Cabbage", price: 6, quantity: 2 },
];

const someProductsIsPotato = products.some(
  (product) => product.title === "Potato"
);
console.log(someProductsIsPotato); // Outputs: true
