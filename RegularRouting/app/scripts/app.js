'use strict';

/**
 * @ngdoc overview
 * @name regularRoutingApp
 * @description
 * # regularRoutingApp
 *
 * Main module of the application.
 */
angular
  .module('regularRoutingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/include', {
        templateUrl: 'views/about.html',
        controller:'AboutCtrl'
    
      })
      .when('/fiction', {
        templateUrl: 'views/details-for-fiction.html',
        controller:'AboutCtrl'
       
      })
      .when('/details/:edition', {
        templateUrl: 'views/details-for-book1.html',
        controller:'AboutCtrl'
       
      })
      .when('/directives', {
        templateUrl: 'views/directives-view.html',
        controller:'directCtrl'
       
      })

      .otherwise({
        redirectTo: '/'
      });
  });
