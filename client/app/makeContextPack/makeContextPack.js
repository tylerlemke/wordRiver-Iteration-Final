'use strict';

angular.module('wordRiverTeamFtlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('makeContextPack', {
        url: '/makeContextPack',
        templateUrl: 'app/makeContextPack/makeContextPack.html',
        controller: 'MakeContextPackCtrl'
      });
  });
