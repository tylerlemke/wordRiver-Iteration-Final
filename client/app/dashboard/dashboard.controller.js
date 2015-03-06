'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('DashboardCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.students = [];
    $scope.getStudents = function() {
      $http.get('/api/users/me').success(function(user) {
        console.log(user);
        $scope.students = user.studentGroups;
        console.log($scope.packs);
      });
    }
    $scope.getStudents();

    $scope.showdetails = function(group) {
      document.getElementById("studentList").innerHTML = "";
      var words = "";
      for (var i = 0; i < group.students.length; i++) {
        words = words + group.students[i].name + "<br>";

      }
      document.getElementById("studentList").innerHTML = "<u>" + group.groupName  + "</u><br/>" + words;
    }
  });
