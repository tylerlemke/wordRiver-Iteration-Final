'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wordManager', {
        url: '/wordManager',
        templateUrl: 'app/wordManager/wordManager.html',
        controller: 'WordManagerCtrl'
      });
  });
