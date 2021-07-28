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
