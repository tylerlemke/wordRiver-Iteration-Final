'use strict';

angular.module('WordRiverApp')
  .controller('AssignWordsCtrl', function ($rootScope, $scope, $http, socket, Auth) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.categoryArray = [];
    $scope.groupArray = [];
    $scope.selectedCategories = [];
    $scope.selectedGroups = [];
    $scope.selectedStudents = [];
    $scope.studentArray = [];
    $scope.allStudents = [];
    $scope.checkedStudents = [];
    $scope.matchTiles = [];
    $scope.userTiles = [];

    $scope.getAll = function () {
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


    $scope.checkCategories = function (category) {
      var counter;
      for (var i = 0; i < $scope.selectedCategories.length; i++) {
        if ($scope.selectedCategories[i] == category) {
          $scope.selectedCategories.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1) {
        $scope.selectedCategories.push(category);
      }
    };

    $scope.checkGroups = function (group) {
      var counter;
      for (var i = 0; i < $scope.selectedGroups.length; i++) {
        if ($scope.selectedGroups[i] == group) {
          $scope.selectedGroups.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1) {
        $scope.selectedGroups.push(group);
      }
    };

    $scope.checkStudents = function (student) {
      var counter;
      for (var i = 0; i < $scope.checkedStudents.length; i++) {
        if ($scope.checkedStudents[i] == student) {
          $scope.checkedStudents.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1) {
        $scope.checkedStudents.push(student);
      }
    };

    //cat is short for category
    $scope.displayCatInfo = function (category) {
      $scope.userTiles = [];
      $http.get('/api/tile').success(function (allTiles) {
        $scope.allTiles = allTiles;
        for (var i = 0; i < $scope.allTiles.length; i++) {
          if ($scope.allTiles[i].creatorID == $scope.currentUser._id) {
            $scope.userTiles.push($scope.allTiles[i]);
          }
        }
        $scope.matchTiles = [];
        for (var j = 0; j < $scope.userTiles.length; j++) {
          for (var z = 0; z < $scope.userTiles[j].contextTags.length; z++) {
            if ($scope.userTiles[j].contextTags[z].tagName == category) {
              $scope.matchTiles.push($scope.userTiles[j].name);
            }
          }
        }

      if($scope.matchTiles.length > 0) {
        alert("The tiles in the category " + category + " are:\n" + $scope.matchTiles.join('\n'));
      } else {
        alert("There are no tiles in this category");
      }
      });
    };

    $scope.assignWords = function () {
      if ($scope.selectedCategories.length > 0) {
        for (var i = 0; i < $scope.checkedStudents.length; i++) {
          $scope.studentCategoryArray = [];
          $scope.studentCategoryArray = $scope.checkedStudents[i].contextTags;
          $scope.checkCategoryDups($scope.studentCategoryArray, $scope.selectedCategories);
          for (var j = 0; j < $scope.selectedCategories.length; j++) {
            $scope.studentCategoryArray.push($scope.selectedCategories[j]);
          }
          $http.patch('/api/students/' + $scope.checkedStudents[i]._id,
            {contextPacks: $scope.studentCategoryArray});
        }
        //for(var w = 0; $scope.selectedGroups.length; w++){
        //  $scope.groupCategoryArray = [];
        //  $scope.groupCategoryArray = $scope.currentUser.groupList[w].contextPacks;
        //  $scope.checkCategoryDups($scope.groupCategoryArray, $scope.selectedCategories);
        //  for (var j = 0; j < $scope.selectedCategories.length; j++) {
        //    $scope.groupCategoryArray.push($scope.selectedCategories[j]);
        //  }
        //  $http.patch('/api/user/' + $scope.currentUser._id + '/group',
        //    {groupList: $scope.studentCategoryArray});
        //}
      }
    };

    $scope.checkCategoryDups = function (studentCategoryArray, checkedCategoryArray) {
      for (var i = 0; i < studentCategoryArray.length; i++) {
        for (var j = 0; j < checkedCategoryArray.length; j++) {
          if (studentCategoryArray[i] == checkedCategoryArray[j]) {
            studentCategoryArray.splice(i, 1);
          }
        }
      }
    };

  });
