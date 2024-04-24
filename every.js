const products = [
  { title: "Cucumber", price: 1, quantity: 1 },
  { title: "Tomato", price: 2, quantity: 2 },
  { title: "Mustard", price: 3, quantity: 3 },
  { title: "Potato", price: 4, quantity: 1 },
  { title: "Cabbage", price: 6, quantity: 2 },
  { title: "Carrot", price: 6, quantity: 3 },
  { title: "Cauliflower", price: 7, quantity: 1 },
];

//verify if all items check the condition
const productsSelected = products.every((product) => product.quantity > 0);
console.log(productsSelected); // Outputs: true
