'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.tilesArray = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.tilesArray = awesomeThings;
      socket.syncUpdates('thing', $scope.tilesArray);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
