// uses https://api.twitter.com/oauth/authorize?oauth_token=<token>

// POST : https://api.twitter.com/oauth/request_token
// Param : oauth_callback

var app = angular.module('TwitterApp', []);

app.run(['$rootScope', '$window', function($rootScope, $window) {

	$rootScope.user = {};
	$rootScope.token = '';
	
	$('#getUserInfo').on('click', function(event) {
		$.get('/accessToken' + location.search).done(function(user) {
                    
            });
	});

	$('#logout').on('click', function(event) {
	});

	$('#login').on('click', function() {
		window.location.href = 'http://thelionstestingjungle.com/tokenRequest';
	});


	

	getUserInfo = function() {

	

	};

	logout = function() {


	};

}]);