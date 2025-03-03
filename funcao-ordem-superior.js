// Uma funcao de ordem superior ela é tratada como uma cidadã de primeira classe, mas o que isso significa?
// Significa que ela pode assumir qualquer posto, ou seja...
// Ela pode ser atribuida a uma variável, ela pode ser passada como argumento para outras funcoes
// Ela pode ser retornada como valores de outra funcones
// Recebe uma ou mais funcoes como argumentos ou retorna uma funcao como resultado

const numbers = [2,3,5,7]
 
function multiply(mult){
    console.log("mult", mult)
    return function(number){
        console.log("number", number)
        return number * mult;
    }
}

const double = multiply(2)(4)
console.log("double", double);

//map é uma funcao de ordem superior porque ela receber como argumento uma funcao anonima ...
numbers.map((number)=> console.log(number))
// ja que ela recebe uma funcao anonima podemos passar a nossa funcao certo?
// só que temos que passar somente o primeiro argumento e esperar a funcao retornar uma funcao
const returnFunctionResult = multiply(6)
const numbersDoubled = numbers.map(returnFunctionResult)
console.log("numbersDoubled", numbersDoubled)

//Criar filtros por tamanho da palavra
const words = ['cachorro', 'gato', 'elefante', 'rato', 'pato', 'tigre', 'leão', 'pindamonhangaba', 'jacare']

function createFilterBySize(minimumSize){
    return function(word){
        return word.length >= minimumSize
    }
}

const filterLargeWords = createFilterBySize(10)
const filteredLargeWords = words.filter(filterLargeWords)
console.log("filteredLargeWords", filteredLargeWords)

const filterSmallWords = createFilterBySize(3)
const filteredSmallWords = words.filter(filterSmallWords)
console.log("filteredSmallWords", filteredSmallWords)