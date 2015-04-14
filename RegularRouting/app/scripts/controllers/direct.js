'use strict';

/**
 * @ngdoc function
 * @name regularRoutingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the regularRoutingApp
 */
angular.module('regularRoutingApp')
  .controller('directCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name = "Harry";
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };

    $scope.color = "#333333";


    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
   
  });