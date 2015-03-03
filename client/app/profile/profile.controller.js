/**
 * Created by lynch446 on 2/27/15.
 */
'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('ProfileCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.currentStudent = null;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.getCurrentStudent = function(student){

    }

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
