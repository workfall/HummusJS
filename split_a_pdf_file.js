const hum = require('hummus');

let readPdf = hum.createReader('path/to/the/file');
let pageCount = readPdf.getPagesCount();

for (let i=0; i<pageCount; i++) {
    writePdf = hum.createWriter('result ' + (i+1) + '.pdf');
    writePdf.createPDFCopyingContext(readPdf).appendPDFPageFromPDF(i);
    writePdf.end();
}