// Task 1
const numberOfIterations = 10;

for (let i = 1; i <= numberOfIterations; i++) {
    if (i % 3 == 0) {
        console.log("FizBuz");
    } else if (i % 2 == 0) {
        console.log("Fiz");
    } else if (i % 2 == 1) {
        console.log("Buz");
    }
}
// Task 2
const number = 10;

const getFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        if (i <= number) {
            result *= i;
        }
    }
    return result;
}

console.log(getFactorial(number));
// Task 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const getNumberOfPacks = (sheetsInReamPaper, consumptionPerWeek, weeksAmount) => {
    let result = weeksAmount * consumptionPerWeek / sheetsInReamPaper; 
    if (result % 1 != 0) {
        result++;
    }
    return result;
}

console.log(getNumberOfPacks(sheetsInReamPaper, consumptionPerWeek, weeksAmount));
// Task 4
const floors = 9;
const roomsOnFloor = 3;
const roomNumber = 456;

const getPorchNumber = (floors, roomsOnFloor, roomNumber) => {
    const numberOfApartmentsInThePorch = floors * roomsOnFloor;
    const porchNumber = (roomNumber - 1) / numberOfApartmentsInThePorch + 1;
    return porchNumber;
}

const getFloorNumber = (floors, roomsOnFloor, roomNumber) => {
    const numberOfApartmentsInThePorch = floors * roomsOnFloor;
    const floorNumber = (roomNumber - 1) % numberOfApartmentsInThePorch / roomsOnFloor + 1;
    return floorNumber;
}

console.log(getPorchNumber(floors, roomsOnFloor, roomNumber));
console.log(getFloorNumber(floors, roomsOnFloor, roomNumber));
// Task 5
let string = "";
const line = "-";
const lattice = "#";
const medianNumber = 8;

for (let i = 0; i < medianNumber; i++) {
    for (let j = 1; j < medianNumber - i; j++) {
        string += line;
    }
    for (let j = medianNumber - 2 * i; j <= medianNumber; j++) {
        string += lattice;
    }
    for (let j = 1; j < medianNumber - i; j++) {
        string += line;
    }
    string += "\n";
}

console.log(string);