'use strict';

angular.module('WordRiverApp')
  .controller('StudentManagerCtrl', function ($scope, $location, $http, Auth) {
    //add group, delete group,
    $scope.students = [];
    $scope.user = [];
    $scope.groups = [];
    $scope.currentUser = Auth.getCurrentUser;
    $scope.groupField = "";
    $scope.studentField = "";

    $scope.getStudents = function(){
      $http.get('/api/student').success(function(student) {
        $scope.students = student;
      });
    };

    $scope.getStudents();

    $scope.getUserInfo = function(){
      $http.get('/api/user').success(function(user) {
        $scope.user = user;
        $scope.groups = $scope.currentUser.groups;
      })
    };

    $scope.addGroup = function(){
      if($scope.groupField.length >= 1) {
        $http.post('/api/user', {groups: $scope.groupField}).success(function () {
          $scope.getUserInfo();
          $scope.groups.push({groups: $scope.groupField});
        });
        $scope.groupField = "";
      }
    };

    $scope.addStudent = function(){
      if($scope.studentField.length >= 1) {
        $http.post('/api/user', {groups: $scope.studentField}).success(function () {
          $scope.getUserInfo();
          $scope.groups.push({groups: $scope.groupField});
        });
        $scope.groupField = "";
      }
    };

    $scope.removeGroup = function(index){
      $http.delete('/api/user/' + $scope.currentUser.group[index]).success(function(){
        $scope.getUserInfo();
      });
    };
  });
