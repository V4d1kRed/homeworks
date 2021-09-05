// Task 1
const arrNames = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, index) => {
    if (index < 0 || index >= arr.length) {
        console.error(`Index(${index}) not found in array!`);
    } else {
        arr.splice(index, 1);
    }

    return arr;
};

console.log(removeUser(arrNames, 1));
// Task 2
const obj = {
    name: 'Vasya',
    age: 1,
};

const getAllKeys = (obj) => Object.keys(obj);

console.log(getAllKeys(obj));
// Task 3
const getAllValues = (obj) => Object.values(obj);

console.log(getAllValues(obj));
// Task 4
const firstObj = {
    id: 3,
    name: 'Vasya',
};

const secondObj = {
    id: 4,
    name: 'Katya'
};

const arrСandidates = [
    {
        id: 1,
        name: 'Kolya',
    },
    {
        id: 2,
        name: 'Petya',
    },
];

const insertIntoarr = (obj, candidateId) => {
    const candidatesId = arrСandidates.map(item => item.id);

    if (candidatesId.includes(candidateId)) {
        for (let i = 0; i < arrСandidates.length; i++) {
            if (arrСandidates[i].id === candidateId) {
                arrСandidates.splice(i, 0, obj);
                break;
            }
        }
    } else {
        console.error(`Candidate with id(${candidateId}) not found in array!`);
    }
};

insertIntoarr(firstObj, 1);
insertIntoarr(secondObj, 2);

console.log(arrСandidates);
// Task 5
class Candidate {
    constructor(candidate) {
        this.candidate = candidate;
    }

    state() {
        return this.candidate.address;
    }
}

const candidate = new Candidate(candidatesArr[1]);

console.log(candidate.state());
// Task 6
const getCompanyNames = () => {
    const company = candidatesArr.map(item => item.company);

    return company.filter((item, index) => company.indexOf(item) === index);
};

console.log(getCompanyNames());
// Task 7
const getUsersByYear = (year) => {
    return candidatesArr.filter((item) => +item.registered.split('-')[0] === year);
};

console.log(getUsersByYear(2017));
// Task 8
const getCandidatesByUnreadMsg = (amount) => {
    return candidatesArr.filter((item) => +item.greeting.match(/\d+/) === amount);
};

console.log(getCandidatesByUnreadMsg(4));
// Task 9
const getCandidatesByGender = (gender) => {
    return candidatesArr.filter((item) => item.gender === gender);
};

console.log(getCandidatesByGender('male'));
// Task 10
// Custom reduce
Object.defineProperty(Array.prototype, 'customReduce', {
    value: function (callback) {
        let outputValue = 0;

        for (let i = 0; i < this.length; i++) {
            callback(outputValue = outputValue + this[i]);
        }

        return outputValue;
    },
    enumerable: false
})

const numbers = [1, 32, 21, 12, 54, 12];

console.log(numbers.customReduce((a, b) => a + b));

// Custom join
Object.defineProperty(Array.prototype, 'customJoin', {
    value: function (separator = ',') {
        if (typeof separator !== 'string') {
            throw new Error('Use separator as string');
        }

        let str = '';

        for (let index in this) {
            str +=
                typeof this[index] === 'string' || typeof this[index] === 'number'
                    ? this[index]
                    : '';
            str += index >= this.length - 1 ? '' : separator;
        }
        return str;
    },
    enumerable: false,
});

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.customJoin(', '));
