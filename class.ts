class Emp{
    name:String;
    id:number;
    salary:number;
    address:String;

    constructor(name:String,id:number,salary:number,address:String) {
        this.name=name;
        this.id=id;
        this.salary=salary;
        this.address=address;
        
    }

    displayInfo():void{
        console.log(this.name+" "+this.id+" "+this.salary+" "+this.address);
        
    }
}

const e = new Emp("Sunit",23,45000,"Mumbai");
e.displayInfo();
console.log(e);
