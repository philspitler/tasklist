'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
