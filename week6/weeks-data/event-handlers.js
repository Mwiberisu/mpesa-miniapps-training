const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a) => a * a,
  cube: (a) => a * a * a,
  squareRoot: (a) => Math.sqrt(a),
  power: (a, b) => Math.pow(a, b),
};

console.log(mathOperations.add(1, 2));
console.log(mathOperations.power(2, 3));

const eventHandlers = {};

function on(event, handlers) {
  if (!eventHandlers[event]) {
    eventHandlers[event] = [];
  }
  eventHandlers[event].push(handlers);
}
function trigger(event, ...args) {
  if (!eventHandlers[event]) {
    return;
  }
  eventHandlers[event].forEach((handlers) => handlers(...args));
}

on("login", (name) => console.log(`${name} has logged in`));

trigger("login", "Sue");
trigger("login4", "Sue"); //doesn't exist

// closures = > function within a function that has access to upper function varibles

function createUser(name, age) {
  return {
    greetUser: `Hello ${name}. Nice to meet you`,
    wishHappyBirthday: `Happy birthday ${name}. You are now ${age} years old`,
  };
}

const user = createUser("John", 50);
console.log(user.greetUser);
console.log(user.wishHappyBirthday);
