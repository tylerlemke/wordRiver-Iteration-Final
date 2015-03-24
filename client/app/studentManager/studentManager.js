'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('studentManager', {
        url: '/studentManager',
        templateUrl: 'app/studentManager/studentManager.html',
        controller: 'StudentManagerCtrl'
      });
  });
