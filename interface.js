var PrintDocument = /** @class */ (function () {
    function PrintDocument() {
    }
    PrintDocument.prototype.print = function () {
        console.log("Document is Printing");
    };
    return PrintDocument;
}());
var d = new PrintDocument();
d.print();
