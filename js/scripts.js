// uses https://api.twitter.com/oauth/authorize?oauth_token=<token>

// POST : https://api.twitter.com/oauth/request_token
// Param : oauth_callback

var app = angular.module('TwitterApp', []);

app.run(['$rootScope', '$window', function($rootScope, $window) {

	$rootScope.user = {};
	$rootScope.token = '';
	
	$('#getUserInfo').on('click', function(event) {
	});

	$('#logout').on('click', function(event) {
	});

	$('#login').on('click', function() {
		$.post('https://api.twitter.com/oauth/request_token?oauth_callback=http://localhost:1515', function(data) {
			console.log('Response: ' + JSON.stringify(data));
		});
	});


	

	getUserInfo = function() {

	

	};

	logout = function() {


	};

}]);