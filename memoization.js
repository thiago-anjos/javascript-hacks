console.time("fibonacci");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    //console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log("no memoization:", fibonacci(5)); // Output: 5

console.timeEnd("fibonacci");

console.time("memoization");
function memoize(func) {
  const cache = new Map();
  return function (n) {
    if (!cache.has(n)) {
      cache.set(n, func(n));
    }
    return cache.get(n);
  };
}

const memoizedFibonacci = memoize(fibonacci);
console.log("memoized:", memoizedFibonacci(5));

console.timeEnd("memoization");
