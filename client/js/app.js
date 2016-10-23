var myApp = angular.module('kanbanChallenge', ['ngRoute']);

myApp.config(function($routeProvider, $httpProvider) {

  $httpProvider.interceptors.push('TokenInterceptor');

  $routeProvider
    .when('/login', {
      templateUrl: 'partials/partials.login.html',
      controller: 'LoginCtrl',
    }).when('/', {
      templateUrl: 'partials/partials.kanban.html',
      controller: 'KanbanController',
    });
});
