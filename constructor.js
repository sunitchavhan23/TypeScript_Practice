var Student2 = /** @class */ (function () {
    function Student2(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    Student2.prototype.displayStInfo = function () {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollno);
    };
    return Student2;
}());
var st1 = new Student2("Neet", 12);
st1.displayStInfo();
