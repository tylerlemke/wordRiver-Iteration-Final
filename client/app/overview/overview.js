'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });
