var app = angular.module("app", ['ngResource','ngRoute']);

app.config(['$routeProvider',function($routeProvider ,$locationProvider) {
   
		$routeProvider.when('/',{controller:'Listctrl', templateUrl: 'list.html'}).
		otherwise({redirectTo:'/error'});
	}]);

/*app.factory('app',function($resource){
	return $resource('/HelloWeb/getDate',{id:'@id'},{	})
});*/


app.controller("Listctrl",function($scope,$location,$http) {
	
	$scope.predicate = 'status';
    $scope.reverse = true;
    $scope.order = function(predicate) {
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.predicate = predicate;
    };


	
	$http.get("/HelloWeb/getDate")
    .success(function(response) {$scope.data = response;});

});

