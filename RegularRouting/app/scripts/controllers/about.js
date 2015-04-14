'use strict';

/**
 * @ngdoc function
 * @name regularRoutingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the regularRoutingApp
 */
/*angular.module('regularRoutingApp')
  .controller('AboutCtrl', function ($scope,$routeParams,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     
     $scope.edition=$routeParams.edition;

     $scope.viewLoad=function (){
     	console.log("clicked")
     	if($scope.loadCategories==true)
     	{
     	return 'views/main.html';
     	}
     	else{
     		return ;
     	}
     }
     $scope.goBack = function (){
      $location.path('/fiction')
     }
  });*/



angular.module('regularRoutingApp')
  .controller('AboutCtrl', function ($scope,$routeParams,Data,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     Data.get_data().success(function (data){
        console.log(data);
        $scope.books = data;
     })
     $scope.edition=$routeParams.edition;

     $scope.viewLoad=function (){
      console.log("clicked")
      if($scope.loadCategories==true)
      {
      return 'views/main.html';
      }
      else{
        return ;
      }
     }
      $scope.goBack = function (){
      $location.path('/fiction')
     }
  });