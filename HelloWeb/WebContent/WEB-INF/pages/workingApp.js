var app = angular.module("app", ['ngResource','ngRoute']);

app.config(['$routeProvider',function($routeProvider ,$locationProvider) {
   
		$routeProvider.when('/',{controller:'Listctrl', templateUrl: 'list.html'}).
		otherwise({redirectTo:'/error'});
	}]);

app.controller("Listctrl",function($scope,$location,$http,$q) {
	$scope.test="testing";
	//$scope.data= [{"3":"nizaam0","2":"naveed0","1":"ifti0","0":"test0"},{"3":"nizaam1","2":"naveed1","1":"ifti1","0":"test1"},{"3":"nizaam2","2":"naveed2","1":"ifti2","0":"test2"},{"3":"nizaam3","2":"naveed3","1":"ifti3","0":"test3"},{"3":"nizaam4","2":"naveed4","1":"ifti4","0":"test4"},{"3":"nizaam5","2":"naveed5","1":"ifti5","0":"test5"},{"3":"nizaam6","2":"naveed6","1":"ifti6","0":"test6"},{"3":"nizaam7","2":"naveed7","1":"ifti7","0":"test7"},{"3":"nizaam8","2":"naveed8","1":"ifti8","0":"test8"},{"3":"nizaam9","2":"naveed9","1":"ifti9","0":"test9"}];
	
//	$scope.getData = function(){
//		console.log("asdfasdfasdfasdasdfasdfasd");
//		$scope.data =  $http({
//			method:"GET",
//			url:"/HelloWeb/getDate"
//		});		
//		
//	}
	
	$http.get("/HelloWeb/getDate")
    .success(function(response) {$scope.data = response;});

});

