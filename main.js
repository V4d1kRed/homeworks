// Task 1
const searchCandidatesByPhoneNumber = (phone) => {
    if (typeof(phone) !== 'string') {
        throw new Error('Invalid value entered');
    }

    const getPhoneNumber = (phoneNumber) => {
        const regex = /\d/gi;
        return phoneNumber.match(regex).join('');
    };

    const result = [];
    const phoneNumber = getPhoneNumber(phone);

    candidateArr.forEach(item => {
        if (getPhoneNumber(item.phone).indexOf(phoneNumber) !== -1) {
            result.push(item);
        }
    });

    return result.length > 0 ? result : `Candidate with phone number(${phone}) not found in array!`;
};

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
// Task 2
const getCandidateById = (id) => {
    if (typeof(id) !== 'string') {
        throw new Error('Invalid value entered');
    }

    const getDateFromString = (string) => {
        const regex = /19|20\d{2}-[0-1]\d-[0-3]\d/gi;
        const date = string.match(regex)[0].split('-').reverse();
        const day = date[0];
        const month = date[1];
        const year = date[2];

        const result = `${day}/${month}/${year}`;

        return result.length > 0 ? result : null;
    };

    const result = [];

    candidateArr.forEach(item => {
        if (item._id === id) {
            item.registered = getDateFromString(item.registered);
            result.push(item);
        }
    });

    return result.length > 0 ? result : `Candidate with id(${id}) not found in array!`;
};

console.log(getCandidateById('5e216bc920fd0d22773e4bce'));
// Task 3
const sortCandidatesArr = (sortBy) => {
    const getBalanceFromString = (string) => {
        const regexp = /\d+,\d+.\d+/gi;
        return +string.match(regexp)[0].replace(',', '');
    };

    if (sortBy === 'asc') {
        return [...candidateArr].sort((a, b) => {
            return getBalanceFromString(a.balance) - getBalanceFromString(b.balance);
        });
    } else if (sortBy === 'desc') {
        return [...candidateArr].sort((a, b) => {
            return getBalanceFromString(b.balance) - getBalanceFromString(a.balance);
        });
    } else {
        return candidateArr;
    }
};

console.log(sortCandidatesArr('asc'));
console.log(sortCandidatesArr('desc'));
console.log(sortCandidatesArr());
// Task 4
const getEyeColorMap = () => {
    const result = {};
    const eyeColor = [...new Set(candidateArr.map(item => item.eyeColor))];

    eyeColor.forEach(color => {
        Object.defineProperty(result, color, {
            value: [],
            enumerable: true,
        });
    });

    for (let key in result) {
        candidateArr.forEach(candidate => {
            if (key === candidate.eyeColor) {
                result[key].push(candidate);
            }
        });
    }

    return result;
};

console.log(getEyeColorMap());
