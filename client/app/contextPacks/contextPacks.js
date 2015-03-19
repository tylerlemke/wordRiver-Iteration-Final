'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextPacks', {
        url: '/contextPacks',
        templateUrl: 'app/contextPacks/contextPacks.html',
        controller: 'ContextPacksCtrl'
      });



  });
