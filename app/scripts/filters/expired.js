'use strict';

/**
 * @ngdoc filter
 * @name tasklistApp.filter:expired
 * @function
 * @description
 * # expired
 * Filter in the tasklistApp.
 */
angular.module('tasklistApp')
  .filter('expired', ['config', function (config) {
    return function (items, isExpired) {
      var filtered = [];
      var timeNow = new Date().getTime();
      var expired = (isExpired === undefined) ? true : isExpired;

      var isTaskExpired = function (task) {
        return ((timeNow - task.createdAt) >= config.taskExpiration);
      };

      if (expired) {
        angular.forEach(items, function (item) {
          if (isTaskExpired(item) || item.isComplete === true) {
            filtered.push(item);
          }
        });
      } else {
        angular.forEach(items, function (item) {
          if (!isTaskExpired(item) && !item.isComplete) {
            filtered.push(item);
          }
        });
      }

      return filtered;
    };
  }]);
