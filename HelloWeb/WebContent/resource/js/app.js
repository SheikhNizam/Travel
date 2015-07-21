var TestApp=angular.module("TestApp", ["ngResource"]).config(function($routeProvider){$routeProvider.when('/pages/index.html',{controller:Listctrl, templateUrl: 'list.html'}).otherwise({redirectTo:'/'});
			});

var Listctrl =function($scope,$location){
	$scope.test="testing";
};