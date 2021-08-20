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

    return result.length > 0 ? result : null;
};

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
