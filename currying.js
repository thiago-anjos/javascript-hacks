function greeter(salutation) {
  return function (name) {
    return `${salutation}, ${name}!`;
  };
}

const hello = greeter("Hello");
const hy = greeter("Hy");

console.log(hello("John"));
console.log(hy("John"));

//currying string manipulation

function modifyString(action) {
  return function (str) {
    switch (action) {
      case "uppercase":
        return str.toUpperCase();
      case "lowercase":
        return str.toLowerCase();
      case "trim":
        return str.trim();
      default:
        return str;
    }
  };
}

const lowerCase = modifyString("lowercase");
console.log(lowerCase("HELLO WORLD"));

console.log(modifyString("uppercase")("hello world"));

// IMC
function calculateImc(weight) {
  return function (height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };
}

const imc70 = calculateImc(70);
const imc80 = calculateImc(80);
console.log("Se vc pesa 70kg, seu IMC é:", imc70(170));
console.log("Se vc pesa 80kg, seu IMC é:", imc80(170));
