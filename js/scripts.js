// uses bower install ng-facebook

var app = angular.module('TwitterApp', []);

app.run(['$rootScope', '$window', function($rootScope, $window) {

	$rootScope.user = {};
	$rootScope.token = '';
	
	$('#getUserInfo').on('click', function(event) {
	});

	$('#logout').on('click', function(event) {
	});

	$('#login').on('click', function() {

	});


	

	getUserInfo = function() {

	

	};

	logout = function() {


	};

}]);