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
    return function (items) {
      var filtered = [];
      var timeNow = function () {
        return new Date().getTime();
      };
      var isExpired = function (task) {
        console.log(timeNow() - task.createdAt);
        return ((timeNow() - task.createdAt) >= config.taskExpiration);
      };

      angular.forEach(items, function (item) {
        if (!isExpired(item)) {
          filtered.push(item);
        }
      });

      return filtered;
    };
  }]);
