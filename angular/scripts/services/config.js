'use strict';

/**
 * @ngdoc service
 * @name tasklistApp.config
 * @description
 * # config
 * Value in the tasklistApp.
 */
angular.module('tasklistApp')
  .value('config', {
    firebaseAppUrl: 'https://brilliant-torch-8296.firebaseIO.com',
    taskExpiration: 604800000
  });
