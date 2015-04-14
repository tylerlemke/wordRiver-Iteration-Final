'use strict';

angular.module('WordRiverApp')
  .controller('StudentProfileCtrl', function ($rootScope, $scope, $http, socket) {
    //$scope.currentStudent = $rootScope.currentStudent;
    //console.log($scope.currentStudent);

    $http.get('/api/students').success(function(awesomeThings) {
      $scope.students = awesomeThings;
      socket.syncUpdates('student', $scope.students);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/student', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/student/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });
  });
