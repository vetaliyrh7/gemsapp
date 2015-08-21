 (function () {
     var app = angular.module('routes', ['ngRoute']);
     app.config(function ($routeProvider) {
         $routeProvider.
         when('/', {
             templateUrl: 'templates/allGemsView.html',
             controller: 'StoreController'
         }).
         when('/buy', {
             templateUrl: 'templates/buy.html',
             controller: 'StoreController'
         }).
         when('/:productId', {
             templateUrl: 'templates/GemView.html',
             controller: 'SingleGemController'
         }).
         otherwise({
             redirectTo: '/'
         });
     });
 })();
