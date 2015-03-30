'use strict';

angular.module('WordRiverApp')
  .controller('StudentManagerCtrl', function ($scope, $location, $http, Auth) {
    //add group, delete group,
    $scope.studentList = []; //List of user references to students
    $scope.students = []; //List of actual student objects
    $scope.currentUser = Auth.getCurrentUser();
    $scope.groupField = "";
    $scope.studentField = "";
    $scope.localGroupArray = [];

///////////////////////////////////
    $scope.getStudentList = function(){
      //$http.get('/api/student').success(function(student) {
      //  $scope.students = student;
      //});
     $scope.studentList = $scope.currentUser.studentList;
    };

    $scope.getStudentList();
//////////////////////////////////

    $scope.getGroups = function(){
      //$http.get('/api/user').success(function(user) {
      //  $scope.user = user;
      //  $scope.groups = $scope.currentUser.groups;
      //})
      $scope.localGroupArray = $scope.currentUser.groupList;
    };
    $scope.getGroups();
////////////////////////////////////
    $scope.getStudents = function(){
      for(var i = 0; i < $scope.studentList.length; i++) {
        $http.get("/api/students/" + $scope.studentList[i].studentID).success(function(student) {
          $scope.students.push(student);
        })
      };
    };
    $scope.getStudents();
////////////////////////////////////

    $scope.addGroup = function () {
      if ($scope.groupField.length >= 1) {
        $scope.localGroupArray.push($scope.groupField);
        $http.patch('/api/users/' + $scope.currentUser._id + '/group',
          {groupList: $scope.localGroupArray}
        ).success(function(){
            console.log('success?');
          });
      }
      $scope.groupField="";
      $scope.getGroups();
    };






    //$scope.addGroup = function(){
    //  if($scope.groupField.length >= 1) {
    //    $http.post('/api/user', {groups: $scope.groupField}).success(function () {
    //      $scope.getUserInfo();
    //      $scope.groups.push({groups: $scope.groupField});
    //    });
    //    $scope.groupField = "";
    //  }
    //};
    //
    //$scope.addStudent = function(){
    //  if($scope.studentField.length >= 1) {
    //    $http.post('/api/user', {groups: $scope.studentField}).success(function () {
    //      $scope.getUserInfo();
    //      $scope.groups.push({groups: $scope.groupField});
    //    });
    //    $scope.groupField = "";
    //  }
    //};
    //
    //$scope.removeGroup = function(index){
    //  $http.delete('/api/user/' + $scope.currentUser.group[index]).success(function(){
    //    $scope.getUserInfo();
    //  });
    //};
  });
