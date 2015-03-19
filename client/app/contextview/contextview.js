'use strict';

angular.module('WordRiverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contextview', {
        url: '/contextview',
        templateUrl: 'app/contextview/contextview.html',
        controller: 'ContextviewCtrl'
      });
  });
