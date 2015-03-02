'use strict';

angular.module('wordRiverTeamFtlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AllWordsDatabase', {
        url: '/AllWordsDatabase',
        templateUrl: '../server/api/AllWordsDatabase/AllWordsDatabase.html',
        controller: 'AllWordsDatabaseCtrl'
      });
  });