let truthValue = "Hello";
let falsyValue = "";

// Convert value to boolean
console.log(!!truthValue); // Outputs: true
console.log(!!falsyValue); // Outputs: false

let user = {
    name: "John",
    address: {
        street: "Main",
        city: "New York"
    }
};
    
console.log("user age is:", !!user.age); // Outputs: false

// convert undefined to boolean
let payment = {
    amount: undefined,
    price: ""
};

console.log("payment amount is:", !!payment.amount); // Outputs: false
console.log('payment price is:', !!payment.price); // Outputs: false
