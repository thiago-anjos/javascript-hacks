// Suppose you have user input containing key-value pairs
const userInput = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  };
  
  // You want to create an object with dynamic property names based on the user input
  const user = {};
  for (const key in userInput) {
    // Use dynamic property names to assign values from user input
    user[key] = userInput[key];
  }
  
console.log(user);

let prefix = 'prop';

let obj = {
  [`${prefix}_name`]: 'John Doe',
  [`${prefix}_age`]: 30
};

console.log(obj); // Output: { prop_name: 'John Doe', prop_age: 30 }

  