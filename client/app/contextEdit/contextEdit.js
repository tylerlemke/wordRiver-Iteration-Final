'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextEdit', {
        url: '/contextEdit',
        templateUrl: 'app/contextEdit/contextEdit.html',
        controller: 'ContextEditCtrl'
      });
  });
