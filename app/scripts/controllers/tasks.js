'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
.controller('TasksCtrl', function ($scope, $window, $firebase, config) {
  var ref = new $window.Firebase(config.firebaseAppUrl + '/tasks/');
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local array
  $scope.tasks = sync.$asArray();

  $scope.addTask = function (name, priority) {
    $scope.tasks.$add({
      name: name,
      priority: priority,
      createdAt: new Date().getTime(),
      isComplete: false
    }).then(function () {
      $scope.newTaskText = '';
    });
  };

  $scope.completeTask = function (task) {
    task.isComplete = true;
    $scope.tasks.$save(task);

  };
});
