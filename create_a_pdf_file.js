var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });

    var hummus = require('hummus');
    var pdfWriter = hummus.createWriter(new hummus.PDFStreamForResponse(res));
    var page = pdfWriter.createPage(0, 0, 500, 800);
    pdfWriter.startPageContentContext(page).writeText('Welcome To ' + (req.query.id ? req.query.id : 'Workfall!'),
        0, 400,
        {
            font: pdfWriter.getFontForFile('arial.ttf'),
            size: 50,
            colorspace: 'gray',
            color: 0x00
        });
    pdfWriter.writePage(page);
    pdfWriter.end();

    res.end();

});

app.listen(3000);