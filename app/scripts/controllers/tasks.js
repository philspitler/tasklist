'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
.controller('TasksCtrl', function ($scope, $window, $firebase) {
  var ref = new $window.Firebase('https://brilliant-torch-8296.firebaseio.com/tasks/');
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local array
  $scope.tasks = sync.$asArray();

  $scope.addTask = function (name) {
    $scope.tasks.$add({
      name: name,
      createdAt: new Date().getTime()
    }).then(function () {
      $scope.newTaskText = '';
    });
  };

  $scope.isExpired = function (task) {
    return 604800000 > task.createdAt;
  };
});
