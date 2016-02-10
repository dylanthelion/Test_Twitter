var express = require('express'),
    request = require('request'),
    path    = require('path'),
    fs = require('fs'),
    bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var portToServe = 1515;

if( process.argv.length > 3 ) {
    portToServe = process.argv[3];
}

app.get('/', function (req, res) {
    res.sendFile(path.normalize(__dirname + '/index.html'));
});

app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var server = app.listen(portToServe, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Serving "' + "app" + '" at http://%s:%s', host, port);
});