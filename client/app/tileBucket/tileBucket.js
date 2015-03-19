'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tileBucket', {
        url: '/tileBucket',
        templateUrl: 'app/tileBucket/tileBucket.html',
        controller: 'TileBucketCtrl'
      });
  });