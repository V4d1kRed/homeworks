// Task 1
function Employee(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
}

const employeeObj = new Employee(employeeArr[0]);

console.log(employeeObj);
// Task 2
Employee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`;
}

console.log(employeeObj.getFullName());
// Task 3
const createEmployesFromArr = (arr) => {
    const employes = [];

    for (let i = 0; i < arr.length; i++) {
        const employee = new Employee(arr[i]);
        employes.push(employee);
    }

    return employes;
};
const emplyeeConstructArr = createEmployesFromArr(employeeArr);

console.log(emplyeeConstructArr);
// Task 4
const getFullNamesFromArr = (arr) => {
    const employes = [];

    for (let i = 0; i < arr.length; i++) {
        employes.push(arr[i].getFullName());
    }

    return employes;
}

console.log(getFullNamesFromArr(emplyeeConstructArr));
// Task 5
const getMiddleSalary = (arr) => {
    const salary = [];

    for (let i = 0; i < arr.length; i++) {
        salary.push(arr[i].salary);
    }

    const averageSalary = Math.floor(salary.reduce((a, b) => a + b) / salary.length);

    return averageSalary;
}

console.log(getMiddleSalary(emplyeeConstructArr));