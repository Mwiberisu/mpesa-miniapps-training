// Functional programming is a declarative programming paradigm style where one applies pure functions in sequence to solve complex problems. Functions take an input value and produce an output value without being affected by the program.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

const sumDeclarative = numbers.reduce((x, y) => x + y, 0); //x is previous value, y currently, 0 starting index
console.log(sumDeclarative);

// Higher order functions- eg reduce. Takes a function as an argument or returns a fuction as a result.
const map = (arr, func) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let individualElement = arr[i];
    let individualFunc = func(individualElement);
    result.push(individualFunc);
  }
  return result;
};

const squaredNumbers = map(numbers, (x) => x * x);
console.log(squaredNumbers);

const add10 = map(numbers, (x) => x + 10);
console.log(add10);

const greetSomeone = (name) => "Hello " + name;
console.log(greetSomeone("Sue"));
console.log(greetSomeone("Doe"));

const cart = [
  { item: "apples", quantity: 3, price: 10 },
  { item: "milk", quantity: 4, price: 20 },
  { item: "eggs", quantity: 2, price: 15 },
];

const getCartTotal = (cart) =>
  cart
    .map((item) => item.quantity * item.price)
    .reduce((previous, current) => previous + current);
console.log(getCartTotal(cart));
