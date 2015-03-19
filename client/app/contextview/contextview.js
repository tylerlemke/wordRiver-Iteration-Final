'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextview', {
        url: '/contextview',
        templateUrl: 'app/contextview/contextview.html',
        controller: 'ContextviewCtrl'
      });
  });