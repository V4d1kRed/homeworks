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
        let result = '';
        const regex = /19|20\d{2}-[0-1]\d-[0-3]\d/gi;
        const date = string.match(regex)[0].split('-').reverse();
        const day = date[0];
        const month = date[1];
        const year = date[2];

        result = `${day}/${month}/${year}`;

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
