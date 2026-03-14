var Student = /** @class */ (function () {
    function Student(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    Student.prototype.displayStInfo = function () {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollno);
    };
    Student.displaySchool = function () {
        console.log("School Name: " + Student.schoolName);
    };
    Student.schoolName = "ABC School";
    return Student;
}());
var s1 = new Student("Neet", 12);
s1.displayStInfo();
Student.displaySchool();
