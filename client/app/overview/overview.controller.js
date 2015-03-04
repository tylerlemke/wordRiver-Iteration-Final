'use strict';

angular.module('wordRiverSpaceshipParrotIteration1App')
  .controller('OverviewCtrl', function ($scope, $http, socket) {
    $scope.studentList = [];

    $scope.contextPacks = [];

    $scope.textField = "";
    $scope.tileField = "";

    $scope.showPack = false;
    $scope.currentPack = null;
    $scope.showTileAdder = false;

    $http.get('/api/packs').success(function (contextPack) {
      $scope.contextPacks = contextPack;
      socket.syncUpdates('pack', $scope.contextPacks);
    });

    $http.get('/api/students').success(function(studentList) {
      $scope.studentList = studentList;
      socket.syncUpdates('student', $scope.studentList);
    });

    //Get this working
    $scope.deletePack = function(index) {
      $http.delete('/api/packs/' + $scope.contextPacks[index]._id).success(function () {
        //$scope.getContextPacks();
      });
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addContextPacks = function () {
      if ($scope.textField.length >= 1) {
        $http.post('/api/packs', {packName: $scope.textField, tiles: []});
      }
    };

    $scope.addTile = function(){
      if ($scope.tileField.length >= 1) {
        $http.post('/api/packs', {tiles: [$scope.tileField]}).success(function () {
          //$scope.getContextPacks();
        });
        $scope.currentPack.tiles.push($scope.tileField);
        $scope.tileField = "";
      }
    };

    $scope.toggleShowAdder = function() {
      $scope.showTileAdder = !$scope.showTileAdder;
    };

    $scope.packInfo = function(pack){
      $scope.showPack = true;
      $scope.currentPack = pack;
    };
  });
