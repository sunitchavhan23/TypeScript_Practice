class Student2{
    name:string;
    rollno:number;

    constructor(name:string,rollno:number) {
        this.name=name;
        this.rollno=rollno;
    }

    displayStInfo():void{
        console.log("Name: "+ this.name);
        console.log("Roll No: "+this.rollno);
        
        
    }
}

const st1=new Student2("Neet",12);
st1.displayStInfo();