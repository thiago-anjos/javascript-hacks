function person(name) {
  return function (weight, height) {
    return function (fixed) {
      const imc = calculateImc(weight)(height);
      return `${name} IMC is ${toFixed(imc, fixed)}`;
    };
  };
}

function calculateImc(weight) {
  return function (height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };
}

function toFixed(value, fixed) {
  return value.toFixed(fixed);
}

const imcLucas = person("Lucas")(80, 180)(2);
console.log(imcLucas);

const onlyImc = calculateImc(80)(180);
const onlyImcFixed = toFixed(onlyImc, 2);
console.log(onlyImcFixed);
