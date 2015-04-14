'use strict';

angular.module('wordRiverAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('studentProfile', {
        url: '/studentProfile',
        templateUrl: 'app/studentProfile/studentProfile.html',
        controller: 'StudentProfileCtrl'
      });
  });