'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('DashboardCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.students = [];
    $scope.getStudents = function() {
      $http.get('/api/student').success(function (students) {
        $scope.students = students;
        socket.syncUpdates('student', $scope.students);
      });
    }
    $scope.getStudents();
  });
