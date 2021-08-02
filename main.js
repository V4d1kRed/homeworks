// Task 1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = [];

for (let key in citiesAndCountries) {
    result.push(`${key} - это ${citiesAndCountries[key]}`);
}

console.log(result);
// Task 2
const amount = 12;

const getArray = amount => {
    if (amount <= 0 || amount % 3 !== 0) {
        return 'Введите положительное значение кратное 3-м!';
    } else {
        const multiArray = [];
        for (let i = 0; i < amount / 3; i++) {
            multiArray[i] = [];
            for (let j = 0; j < 3; j++) {
                multiArray[i][j] = j + i * 3 + 1;
            }
        }
        return multiArray;
    }
}

console.log(getArray(amount));
// Task 3
const lang = 'ru';
const day = 3;

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const getNameOfDay = (lang, day) => {
    for (let key in namesOfDays) {
        if (key === lang) {
            for (let i = 0; i < namesOfDays[key].length; i++) {
                return namesOfDays[key][day - 1];
            }
        }
    }
}

console.log(getNameOfDay(lang, day));
// Task 4
const arrayNumbers = [19, 5, 42, 2, 77];

const getSumOfNumbers = arrayNumbers => {
    const resultArray = [];
    
    arrayNumbers.forEach(item => {
        if (typeof(item) === 'number' && item > 0 && item % 1 === 0) {
            resultArray.push(item);
        }
    });

    return resultArray.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
}

console.log(getSumOfNumbers(arrayNumbers));
// Task 5
const binaryNumber = [1, 0, 1, 0, 1];

const getNumberInDecimalSystem = arrayNumbers => {
    const binaryString = arrayNumbers.join('');
    
    return parseInt(binaryString, 2);
}

console.log(getNumberInDecimalSystem(binaryNumber));