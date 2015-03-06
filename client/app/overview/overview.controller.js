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

    $scope.getPacks = function() {
      $http.get('/api/packs').success(function (contextPack) {
        $scope.contextPacks = contextPack;
        socket.syncUpdates('pack', $scope.contextPacks);
      });
    }

    $scope.getPacks();

    $http.get('/api/students').success(function(studentList) {
      $scope.studentList = studentList;
      socket.syncUpdates('student', $scope.studentList);
    });


    $scope.deletePack = function(index) {
      $http.delete('/api/packs/' + $scope.contextPacks[index]._id)
    };
    
    $scope.deleteTile = function(pack,index) {
      return pack.splice(index, 1);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addContextPacks = function () {
      if ($scope.textField.length >= 1) {
        $http.post('/api/packs', {packName: $scope.textField, tiles: []});
      }
      $scope.textField="";
    };

    $scope.addTile = function(){
      if ($scope.tileField.length >= 1) {
        console.log($scope.currentPack.tiles);
        $scope.currentPack.tiles.push($scope.tileField);
        console.log($scope.currentPack.tiles);
        console.log($scope.currentPack);
        $http.patch('/api/packs/' + $scope.currentPack._id, $scope.currentPack
          //{
          //  tiles: $scope.currentPack.tiles
          //}
        ).success(function () {
            console.log("Glorious Victory!");
        });
        $scope.tileField = "";
        $scope.getPacks();
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
