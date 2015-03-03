'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextEdit', {
        url: '/contextEdit',
        templateUrl: 'app/contextEdit/contextEdit.html',
        controller: 'ContextEditCtrl'
      });
  });