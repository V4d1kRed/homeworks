// Task 1
class Student {
    constructor(enrollee) {
        this.id = Student.getId();
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.isSelfPayment = Student.getPayment(this);
    }

    static id = 1;
    static listOfStudents = [];

    static getId() {
        return this.id++;
    }

    static sortStudents(arr) {
        return arr.sort((a, b) => {
            if (b.ratingPoint === a.ratingPoint) {
                return b.schoolPoint - a.schoolPoint;
            } else {
                return b.ratingPoint - a.ratingPoint;
            }
        });
    }
    
    static getPayment(student) {
        this.listOfStudents.push(student);
        this.sortStudents(this.listOfStudents);

        for (let i = 0; i < this.listOfStudents.length; i++) {
            if (i <= 4 && this.listOfStudents[i].ratingPoint >= 800) {
                this.listOfStudents[i].isSelfPayment = true;
            } else {
                this.listOfStudents[i].isSelfPayment = false;
            }
        }

        return true;
    }
    
    get listOfStudents() {
        return this.listOfStudents;
    }
};

studentArr.forEach(item => new Student(item));

console.log(Student.listOfStudents);
// Task 2
class CustomString {
    reverse(string) {
        if (typeof(string) === 'string') {
            let result = '';

            for (let i = string.length - 1; i >= 0; i--) {
                result += string[i];
            }

            return result;
        }
        
        console.error('Enter the string!');
    }

    ucFirst(string) {
        if (typeof(string) === 'string') {
            let result = '';
            let firstLetter = string.substr(0, 1).toUpperCase();
            let rightPart = string.substr(1);

            result += firstLetter + rightPart + ' ';

            return result;
        }
        
        console.error('Enter the string!');
    }

    ucWords(string) {
        if (typeof(string) === 'string') {
            let result = '';
            let stringArr = string.split(' ');
            
            for (let i = 0; i < stringArr.length; i++) {
                let item = stringArr[i];
                let firstLetter = item.substr(0, 1).toUpperCase();
                let rightPart = item.substr(1);
                result += firstLetter + rightPart + ' ';
            }

            return result;
        }
        
        console.error('Enter the string!');
    }
}

const myString = new CustomString();

console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));