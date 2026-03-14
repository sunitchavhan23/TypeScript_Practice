interface Printer{
    print():void;
}

class PrintDocument implements Printer{
    print(): void {
        console.log("Document is Printing");
        
    }

}
const d=new PrintDocument();
d.print();