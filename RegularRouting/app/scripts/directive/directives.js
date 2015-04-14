'use strict';

/**
 * @ngdoc function
 * @name regularRoutingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the regularRoutingApp
 */
angular.module('regularRoutingApp')
.directive('helloWorld',function(){
  return {
      replace:true,
      restrict: 'AE',
      template: '<h3>Hello World!!</h3>'
  }
})

.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: {},
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
})

.directive("myCustomDirective", function(){
     return {
        restrict: "EA",
        scope: {
            name: "@myName",
            color: "=",
            reverse: "&"
        },
        template: [
            "<div class='line'>",
            "Name : <strong></strong>;  Change name:<input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Color : <strong style='color:'></strong>;  Change color:<input type='text' ng-model='color' /><br/></div>",
            "<br/><input type='button' ng-click='reverse()' value='Reverse Name'/>"
        ].join("")
    };
})

.directive('helloWorldExample', function() {
  return {
    restrict: 'AE',
    scope: true,                   //change these to all the modes
    replace: true,
    template: '<p style="background-color:{{appColor}}">Hello World</p>',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color','white');
        scope.$apply(function() {
          scope.appColor = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});



