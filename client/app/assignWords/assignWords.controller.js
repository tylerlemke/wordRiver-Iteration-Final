'use strict';

angular.module('WordRiverApp')
  .controller('AssignWordsCtrl', function ($rootScope, $scope, $http, socket, Auth) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.categoryArray = [];
    $scope.groupArray = [];
    $scope.selectedCategories = [];
    $scope.selectedGroups  = [];
    $scope.selectedStudents = [];

    $scope.getCategories = function() {
      $scope.categoryArray = $scope.currentUser.contextPacks;
      $scope.groupArray = $scope.currentUser.groupList;
      //$scope.studentArray = $scope.currentUser
    };
    $scope.getCategories();

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
      for (var i = 0; i < $scope.selectedStudents.length; i++) {
        if ($scope.selectedStudents[i] == student) {
          $scope.selectedStudents.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.selectedStudents.push(student);
      }
    };
  });
