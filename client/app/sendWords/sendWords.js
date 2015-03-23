'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addingWords', {
        url: '/sendWords',
        templateUrl: 'app/sendWords/sendWords.html',
        controller: 'SendWordsCtrl'
      });
  });
