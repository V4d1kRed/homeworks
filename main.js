// Task 1
const getSumOfNumbers = () => {
    let result = 0;

    return (number) => {
        return result += number;
    }
}

const counter = getSumOfNumbers();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));
// Task 2
const changesArray = () => {
    let arr = [];

    return (item) => {
        if (typeof(item) === 'undefined' || item === null) {
            arr = []
            return arr;
        } else {
            arr.push(item);
            return arr;
        }
    }
}

const getUpdatedArr = changesArray();

console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));
// Task 3
const countTime = () => {
    let firstStart = true;
    let startTime = null;

    return () => {
        if (firstStart === true) {
            firstStart = false;
            startTime = new Date();
            return 'Enabled';
        } else {
            let currentTime = new Date();
            let result = Math.floor((currentTime - startTime) / 1000);
            console.log(result);
        }
    }
}

const getTime = countTime();

setTimeout(getTime, 2000);
setTimeout(getTime, 3000);
setTimeout(getTime, 7000);
setTimeout(getTime, 1000);

console.log(getTime());