'use strict';

angular.module('WordRiverApp')
  .controller('AssignWordsCtrl', function ($rootScope, $scope, $http, socket, Auth) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.categoryArray = [];
    $scope.groupArray = [];
    $scope.selectedCategories = [];
    $scope.selectedGroups  = [];
    $scope.selectedStudents = [];
    $scope.studentArray = [];
    $scope.allStudents = [];
    $scope.checkedStudents = [];

    $scope.getAll = function() {
      $scope.categoryArray = $scope.currentUser.contextPacks;
      $scope.groupArray = $scope.currentUser.groupList;
      $scope.studentArray = $scope.currentUser.studentList;
      $http.get('/api/students').success(function (allStudents) {
        $scope.allStudents = allStudents;
        for (var i = 0; i < $scope.allStudents.length; i++) {
          for (var j = 0; j < $scope.studentArray.length; j++) {
            if ($scope.allStudents[i]._id == $scope.studentArray[j].studentID) {
              $scope.selectedStudents.push($scope.allStudents[i]);
            }
          }
        }
      });
    };
    $scope.getAll();



    $scope.checkCategories = function(category){
      var counter;
      for (var i = 0; i < $scope.selectedCategories.length; i++) {
        if ($scope.selectedCategories[i] == category) {
          $scope.selectedCategories.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.selectedCategories.push(category);
      }
    };

    $scope.checkGroups = function(group){
      var counter;
      for (var i = 0; i < $scope.selectedGroups.length; i++) {
        if ($scope.selectedGroups[i] == group) {
          $scope.selectedGroups.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.selectedGroups.push(group);
      }
    };

    $scope.checkStudents = function(student){
      var counter;
      for (var i = 0; i < $scope.checkedStudents.length; i++) {
        if ($scope.checkedStudents[i] == student) {
          $scope.checkedStudents.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.checkedStudents.push(student);
      }
    };

    $scope.assignWords = function() {
      if ($scope.selectedCategories.length > 0) {
        for (var i = 0; i < $scope.checkedStudents.length; i++) {
          $scope.studentCategoryArray = [];
          $scope.studentCategoryArray = $scope.checkedStudents[i].contextTags;
          for (var j = 0; j < $scope.selectedCategories.length; j++) {
            $scope.studentCategoryArray.push($scope.selectedCategories[j]);
          }
          $http.patch('/api/students/' + $scope.checkedStudents[i]._id,
            {contextPacks: $scope.studentCategoryArray});
          console.log($scope.checkedStudents[i].contextTags.length);
        }
      }
    }
  });
