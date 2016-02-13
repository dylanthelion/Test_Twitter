var express = require('express'),
    request = require('request'),
    path    = require('path'),
    fs = require('fs'),
    bodyParser = require("body-parser");

var Twitter = require("node-twitter-api");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var portToServe = 1515;

if( process.argv.length > 3 ) {
    portToServe = process.argv[3];
}

app.get('/', function (req, res) {
    res.sendFile(path.normalize(__dirname + '/index.html'));
});

var twitter = new Twitter({
        consumerKey: 'rFpuveYzdgp5lkpeA4lSjinWe',
        consumerSecret: 'LJbfWN7aZyfJasV6uOm0t5BrqblVXzdswGyRcpTmciawgQPbMP',
        callback: 'http://thelionstestingjungle.com'
});

var _requestSecret;

app.get("/tokenRequest", function(req, res) {
	console.log('Token request');
    twitter.getRequestToken(function(err, requestToken, requestSecret) {
    	if (err) {
    		console.log('Token request error');
    		res.status(500).send(err);
    	} else {
    		console.log('Request secret: ' + requestSecret);
            _requestSecret = requestSecret;
            res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
        }
    });
});

app.get("/accessToken", function(req, res) {
	console.log('Access token');
    var requestToken = req.query.oauth_token,
    verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
            if (err) {
            	console.log('Get info error');
            	res.status(500).send(err);
            } else {
                var params = {
                    'include_email' : true
                };
                twitter.verifyCredentials(accessToken, accessSecret, params, function(err, user) {
                    if (err) {
                    	console.log('Verification in get info error');
                        res.status(500).send(err);
                    } else {
                    	console.log('User: ' + JSON.stringify(user));
                        res.send(user);
                    }
                });
            }
        });
});

app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var server = app.listen(portToServe, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Serving "' + "app" + '" at http://%s:%s', host, port);
});