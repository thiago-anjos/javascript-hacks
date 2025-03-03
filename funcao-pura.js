//Esta função é pura porque, para qualquer valor de number, ela sempre retornará o mesmo resultado, e não modifica nenhuma variável externa.

function square(number){
    return number * number;
}

// criar funcao de memoizacao que deve ser usada com um funcao pura

function memoize(func){
    const cache = {};
    return function(...args){
        console.log("args", args)
        const key = JSON.stringify(args);
        console.log("key", key)
        if(cache[key]){
            console.count("fui memorizados tantas vezes")
            return cache[key]
        }else{
            const result = func(...args);
            cache[key] = result;
            console.log("O cache é salvo assim", cache)
            return result;
        }
    }
}

const squareMemoized = memoize(square);
console.log(squareMemoized(2))
console.log(squareMemoized(2))
console.log(squareMemoized(2))

// Funcao pura, sempre retorna o mesmo resultado, independentes dos valores que vc passe para ela.
function sum(a,b){
    return a + b;
}

function upperCase(text){
    return text.toUpperCase();
}

const result = upperCase("thiago é meu amigo")
console.log(result);

// Vamos usar o bind para criar uma nova funcao para uma funcao ja existente.

function trump(gender, age, state){
    return `${gender} are obliged to serve in the army from the age of ${age} in state of ${state}`
}

const men = trump.bind(this, "men")
const woman = trump.bind(this, "woman")
console.log(men(18, "NY"))
console.log(woman(21, "Kansas"))