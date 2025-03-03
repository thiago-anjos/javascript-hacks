//Esta função é pura porque, para qualquer valor de number, ela sempre retornará o mesmo resultado, e não modifica nenhuma variável externa.

function square(number){
    return number * number;
}

// criar funcao de memoizacao que deve ser usada com um funcao pura

function memoize(func){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        console.log("key", key)
        if(cache[key]){
            console.count("fui memorizados tantas vezes")
            return cache[key]
        }else{
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    }
}

const squareMemoized = memoize(square);
console.log(squareMemoized(2))
console.log(squareMemoized(2))
console.log(squareMemoized(2))
console.log(squareMemoized(2))
console.log(squareMemoized(2))
console.log(squareMemoized(3))
console.log(squareMemoized(3))