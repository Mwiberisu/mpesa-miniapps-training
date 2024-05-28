// Closures and state
function createperson(name) {
  let _name = name; //private variable

  function setName(name) {
    _name = name;
  }
  return {
    getName: function () {
      return _name;
    },
    changeName: function (name) {
      setName(name);
    },
  };
}

const person = new createperson("Jane");
console.log(person.getName());
person.changeName("Doe");
console.log(person.getName());
