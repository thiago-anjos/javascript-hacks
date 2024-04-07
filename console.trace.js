// Is the "currentSeconds" value odd or even?
const currentSeconds = new Date().getSeconds();
const condition = currentSeconds % 2 === 0;

function one() {
  example();
}
function two() {
  example();
}
function randomChoice() {
  if (!condition) {
    // OK, I'm lost!
    one();
  } else {
    two();
  }
}

function example() {
  // Where is this function called?
  console.trace("Trace from example() function");
}

randomChoice();
//  console.trace() Trace from example function
//     example debugger eval code:23
//     one debugger eval code:6
//     randomChoice debugger eval code:16
