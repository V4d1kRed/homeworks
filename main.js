// Task 1
const arrNames = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr, index) => {
    if (index < 0 || index >= arr.length) {
        console.error(`Index ${index} not found in array!`);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                arr.splice(i, 1);
            }
        }
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
        for (let  i = 0; i < arrСandidates.length; i++) {
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