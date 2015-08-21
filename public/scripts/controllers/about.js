'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
