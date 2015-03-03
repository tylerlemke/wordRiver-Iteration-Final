'use strict';

angular.module('wordRiverTeamFtlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('makeContextPack', {
        url: '/dashboard/makeContextPack',
        templateUrl: 'app/makeContextPack/makeContextPack.html',
        controller: 'MakeContextPackCtrl'
      });
  });
