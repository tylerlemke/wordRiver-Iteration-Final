'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextPacks', {
        url: '/contextPacks',
        templateUrl: 'app/contextPacks/contextPacks.html',
        controller: 'ContextPacksCtrl'
      });



  });
