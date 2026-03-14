var Emp = /** @class */ (function () {
    function Emp(name, id, salary, address) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.address = address;
    }
    Emp.prototype.displayInfo = function () {
        console.log(this.name + " " + this.id + " " + this.salary + " " + this.address);
    };
    return Emp;
}());
var e = new Emp("Sunit", 23, 45000, "Mumbai");
e.displayInfo();
console.log(e);
