// Task 1
class Student {
    constructor(enrollee) {
        this.id = Student.getId();
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.isSelfPayment = Student.getPayment(Student.listOfStudents, this, this.ratingPoint);
    }

    static id = 1;

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

    static listOfStudents = [];
    
    static getPayment(arr, student, ratingPoint) {   
        arr.push(student);
        arr = this.sortStudents(arr);
        
        if (ratingPoint >= 800) {
            return true;
        }
        
        return false;
    }


    get listOfStudents() {
        return this.listOfStudents;
    }
};

studentArr.forEach(item => new Student(item));

console.log(Student.listOfStudents);