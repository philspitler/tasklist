'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
  .controller('TasksCtrl', function($scope, $window, $resource) {
    var Task = $resource('/api/tasks/:id', null, {
      'update': {
        method: 'PUT'
      }
    });

    $scope.tasks = Task.query(function(tasks) {
      $scope.addTask = function(name, priority) {
        var task = new Task({
          name: name,
          priority: priority,
          createdAt: new Date().getTime(),
          isComplete: false
        });
        task.$save();
        tasks.push(task);

      };

      $scope.completeTask = function(task) {
        task.isComplete = true;
        Task.update({
          id: task._id
        }, task);
      };
    });
  });
