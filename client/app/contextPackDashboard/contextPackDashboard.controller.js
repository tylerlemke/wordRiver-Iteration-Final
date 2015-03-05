'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('ContextPackDashboardCtrl', function ($scope, $http, socket) {
    $scope.contextPack = [];

    $http.get('/api/contextPacks').success(function(contextPacks) {
      $scope.contextPack = contextPacks;
      socket.syncUpdates('contextPack', $scope.contextPacks);
    });

    $scope.deleteThing = function(thing) {
      $http.delete('/api/contextPacks/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('contextPack');
    });
  });
