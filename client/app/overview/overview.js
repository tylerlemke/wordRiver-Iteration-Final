'use strict';

angular.module('wordRiverSpaceshipParrotIteration1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });
