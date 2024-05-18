// find the last element with age >= 30

const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "passion fruit" },
  { id: 4, name: "orange" },
  { id: 5, name: "watermelon" },
  { id: 6, name: "kiwi" },
  { id: 7, name: "grape" },
  { id: 8, name: "mango" },
  { id: 9, name: "pear" },
  { id: 10, name: "strawberry" },
];

// the bad option
const resultBad = [...items]
  .reverse()
  .find((item) => item.name.startsWith("p"));
console.log(resultBad);

// the good option
const resultGood = items.findLast((item) => item.name.startsWith("p"));
console.log(resultGood);
