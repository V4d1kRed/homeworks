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
    const result = [];

    for (let i = 0; i < candidatesArr.length; i++) {
        result.push(candidatesArr[i].company);
    }

    return [...new Set(result)];
};

console.log(getCompanyNames());
// Task 7
const getUsersByYear = (year) => {
    const result = [];
    const yearRegistration = [...new Set(candidatesArr.map(item => +item.registered.split('-')[0]))];

    if (yearRegistration.includes(year)) {
        for (let i = 0; i < candidatesArr.length; i++) {
            if (+candidatesArr[i].registered.split('-')[0] === year) {
                result.push(candidatesArr[i]._id);
            }
        }
    } else {
        console.error(`Candidate ${year} registration not found in array!`);
    }

    return result;
};

console.log(getUsersByYear(2016));
// Task 8
const getCandidatesByUnreadMsg = (amount) => {
    const result = [];

    for (let i = 0; i < candidatesArr.length; i++) {
        if (+candidatesArr[i].greeting.match(/\d+/) === amount) {
            result.push(candidatesArr[i]);
        }
    }

    return result;
};

console.log(getCandidatesByUnreadMsg(10));
// Task 9
const getCandidatesByGender = (gender) => {
    const result = [];

    for (let i = 0; i < candidatesArr.length; i++) {
        if (candidatesArr[i].gender === gender) {
            result.push(candidatesArr[i]);
        }
    }

    return result;
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