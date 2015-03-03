'use strict';

angular.module('wordRiverTeamFtlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextPackDashboard', {
        url: '/dashboard',
        templateUrl: 'app/contextPackDashboard/contextPackDashboard.html',
        controller: 'ContextPackDashboardCtrl'
      });
  });
