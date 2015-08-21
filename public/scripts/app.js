'use strict';

/**
 * @ngdoc overview
 * @name tasklistApp
 * @description
 * # tasklistApp
 *
 * Main module of the application.
 */
angular
  .module('tasklistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/tasks/archived', {
        templateUrl: 'views/tasks-expired.html',
        controller: 'TasksCtrl'
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  });
