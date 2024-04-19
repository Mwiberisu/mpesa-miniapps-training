const person = {
    'name': 'sue',
    'age': 20,
    'school': 'moringa',
    'courses': ['devops', 'miniapps', 'cyber security']
}

console.log(person.courses);
console.log(person['school']);

// create a function that calculates the sum of two numbers
function sum(numa, numb) {
    return numa + numb;
}
console.log(sum(7,3));
console.log(sum(true,3));//evaluates true to 1

// you can check the type of function arguements
function sumWithChecks(numa, numb) {
    if(typeof numa != 'number' || typeof numb != 'number'){
        return "Invalid number";
    }
    return numa + numb;
}
console.log(sumWithChecks(7,3));
console.log(sumWithChecks(true,3));//returns invalid