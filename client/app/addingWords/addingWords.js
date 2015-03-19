'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addingWords', {
        url: '/addingWords',
        templateUrl: 'app/addingWords/addingWords.html',
        controller: 'AddingWordsCtrl'
      });
  });
