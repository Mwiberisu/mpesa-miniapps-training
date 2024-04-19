// lopps perform repetitive tasks
const tasks =['wake up', 'take breakfast', 'shower', 'work', 'lunch', 'work', 'take a walk'];
tasks.forEach(task =>{
    console.log("Task completed:", task);

})

// range
for (let index = 1; index <= 10; index++) {
    console.log("Range:", index);
    
}
// loop through a map
const student = {'name': 'sue', 'age': 22, 'gender':'female'};
for (key in student) {
    console.log(key, 'with value',student[key]);
}