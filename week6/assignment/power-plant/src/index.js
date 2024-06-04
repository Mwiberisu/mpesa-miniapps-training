// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();

// This is a function factory.
// We can easily create more specific functions that
// alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// We create four functions using our function factory.
// We could easily create many more.
const feed = changeState("soil")(5);

const hydrate = changeState("water")(6);

const giveLight = changeState("light")(10);

const namePlant = changeState("name")(
  document.getElementById("plant-name").value
);

// const createPlant = (name) => {
//   return (type) => {
//     return () => {
//       const newState = stateControl(changeState("name")(name));
//       changeState("type")(type);
//       return newState;
//     };
//   };
// };

window.onload = function () {
  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect.
  // Note that we only use one of our functions to alter soil.
  // You can easily add more.
  document.getElementById("feed").onclick = function () {
    const newState = stateControl(feed);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
  };
  document.getElementById("hydrate").onclick = function () {
    const newState = stateControl(hydrate);
    document.getElementById(
      "water-value"
    ).innerText = `Water: ${newState.water}`;
  };

  // This function doesn't actually do anything useful in this application
  // — it just demonstrates how we can "look" at the current state
  // (which the DOM is holding anyway).
  // However, students often do need the ability to see the current state
  // without changing it so it's included here for reference.
  document.getElementById("show-state").onclick = function () {
    // We just need to call stateControl() without arguments
    // to see our current state.
    const currentState = stateControl();
    document.getElementById(
      "soil-value"
    ).innerText = `Soil: ${currentState.soil}`;
    document.getElementById(
      "water-value"
    ).innerText = `Water: ${currentState.water}`;
  };

  // create a plant
};
document.getElementById("create-plant").onclick = function () {
  console.log(document.getElementById("plant-name").value);
  stateControl(
    changeState("name")(document.getElementById("plant-name").value)
  );
  const newState = stateControl(
    changeState("type")(document.getElementById("plant-type").value)
  );

  document.getElementById(
    "plant-name-value"
  ).innerText = `Name: ${newState.name}`;

  document.getElementById(
    "plant-type-value"
  ).innerText = `Type: ${newState.type}`;
};
