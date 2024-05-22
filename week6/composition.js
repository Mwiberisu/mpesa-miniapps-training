// composition -> combining small functions to create a complex function
// You can have the smaller functions resused in different compositions

const add = (x, y) => x + 1;
const multiply = (x) => x * 2;
const divide = (x) => x / 3;

// sample composition
const composedFunction = (x) => divide(multiply(add(x))); //6, 12, 4
console.log(composedFunction(5));

const complexFunction =
  (...functions) =>
  (initialValue) =>
    functions.reduceRight((value, fn) => fn(value), initialValue);

const sampleComposedFunction = complexFunction(divide, multiply, add);
console.log(sampleComposedFunction(5));
