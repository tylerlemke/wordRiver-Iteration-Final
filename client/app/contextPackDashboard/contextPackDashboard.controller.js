'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('ContextPackDashboardCtrl', function ($scope, $http, socket) {
    $scope.contextPack = [];

    $http.get('/api/contextPack').success(function(contextPacks) {
      $scope.contextPack = contextPacks;
      socket.syncUpdates('contextPack', $scope.contextPacks);
    });

    $scope.addThing = function() {
      if($scope.newPack === '') {
        return;
      }
      $http.post('/api/contextPack', { name: $scope.newPack });
      $scope.newPack = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/contextPack/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('contextPack');
    });
  });
