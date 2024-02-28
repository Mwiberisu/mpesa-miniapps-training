// constructors are blueprints for creating an object of a particular type
// sample using String constructor
// const name = new String('Sue');
// console.log(name);
// console.log(name.valueOf());

// create Student constructor using  a function
function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.speak = () => {
        return 'my name is ' + name;
    }
    
}
const studenta = new Student('sue', 5,  'female');
console.log("studenta details", studenta);
console.log(studenta.speak());