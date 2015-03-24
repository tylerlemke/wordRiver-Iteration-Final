'use strict';

angular.module('wordRiverMergeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('studentManager', {
        url: '/studentManager',
        templateUrl: 'app/studentManager/studentManager.html',
        controller: 'StudentManagerCtrl'
      });
  });