'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tileBucket', {
        url: '/tileBucket',
        templateUrl: 'app/tileBucket/tileBucket.html',
        controller: 'TileBucketCtrl'
      });
  });
