'use strict';

angular.module('wordRiverMergeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });
