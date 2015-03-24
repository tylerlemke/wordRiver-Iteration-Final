'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addingWords', {
        url: '/assignWords',
        templateUrl: 'app/assignWords/assignWords.html',
        controller: 'AssignWordsCtrl'
      });
  });
