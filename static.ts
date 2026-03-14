class Student{
    name:string;
    rollno:number;
    static schoolName:string="ABC School"

    constructor(name:string,rollno:number) {
        this.name=name;
        this.rollno=rollno;
    }

    displayStInfo():void{
        console.log("Name: "+ this.name);
        console.log("Roll No: "+this.rollno);
        
        
    }

    static displaySchool():void{
        console.log("School Name: "+Student.schoolName);
        
    }
}

const s1=new Student("Neet",12);
s1.displayStInfo();
Student.displaySchool();