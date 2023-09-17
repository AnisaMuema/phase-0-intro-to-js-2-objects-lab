// Write your solution in this file!
let employee = {
    name: "Briana",
    streetAddress: "WoodVille 7310", 
}

function updateEmployeeWithKeyAndValue(emoplyee, key, value) {
   let newEmployee = {...emoplyee};
    newEmployee[key] = value;

    return newEmployee
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}    

function deleteFromEmployeeByKey(employee, key) {
    let Employee = {...employee};
    delete Employee[key];
    return Employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    //employee = key;
    delete employee[key]
    return employee
}
  
// //function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];

//     // employee = key;

//     return employee;
// }
