// Short-circuit evaluation in JavaScript is a way to evaluate boolean expressions. 
// If the first operand in the expression is enough to determine the final result, 
// the second operand is not evaluated. This is often used with the && (AND) and || (OR) operators

let a = 0;
let b = 1;

console.log(a || b); // Outputs: 0
console.log(a && b); // Outputs: 0

// In this second example, the || operator is used. 
// For an OR operation, if the first operand is true (or a truthy value), 
// JavaScript doesn't need to check the second operand because the result will be true regardless.
// This is why it outputs 1 - it 'short-circuits' and doesn't evaluate d.

let c = 1;
let d = 2;

// Using || operator
console.log(c || d); // Outputs: 1