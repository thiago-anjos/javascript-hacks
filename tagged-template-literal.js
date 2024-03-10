function tagged(strings, ...variables) {
    return variables.reduce((finalString, variable, index) => finalString + variable + strings[index + 1],
        strings[0]
    );
}

let name = "John";
let age = 30;

result = tagged`Hello, my name is ${name} and I am ${age} years old.`;
console.log(result);

let text = tagged`I have ${2} hats. But his name is ${'Lucas'}, he is ${age} years old.`;
console.log(text);