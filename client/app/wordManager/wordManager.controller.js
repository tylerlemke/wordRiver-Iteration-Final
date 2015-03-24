'use strict';

angular.module('WordRiverApp')
  .controller('WordManagerCtrl', function ($scope, $http, socket) {
    $scope.categoryField = "";
    $scope.addField = "";
    $scope.searchField = "";

    $scope.getPacks = function() {
      $http.get('/api/packs').success(function (contextPack) {
        $scope.contextPacks = contextPack;
        socket.syncUpdates('pack', $scope.contextPacks);
      });
    };

    $scope.getPacks();

    $http.get('/api/students').success(function(studentList) {
      $scope.studentList = studentList;
      socket.syncUpdates('student', $scope.studentList);
    });

    $scope.deletePack = function(index) {
      $http.delete('/api/packs/' + $scope.contextPacks[index]._id)
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addCategory = function () {
      if ($scope.categoryField.length >= 1) {
        $http.post('/api/packs', {packName: $scope.categoryField, tiles: []});
      }
      $scope.categoryField="";
    };

    $scope.addWord = function() {
      if ($scope.tileField.length >= 1) {
        $scope.currentPack.tiles.push($scope.tileField);

        $http.patch('/api/packs/' + $scope.currentPack._id,
          {tiles: $scope.currentPack.tiles}
        ).success(function(){
            console.log("Patch completed!");
            console.log($scope.contextPacks);
          });

        //$http.post('/api/packs', {packName: $scope.currentPack.packName, tiles: $scope.currentPack.tiles});
        //$http.delete('/api/packs/' + $scope.currentPack._id);
        $scope.tileField = "";

      }
    };

    $scope.deleteWord = function(pack, index) {
      pack.tiles.splice(index, 1);
      $http.patch('/api/packs/' + pack._id,
        {tiles: pack.tiles}
      ).success(function() {
          console.log("Patch completed!");
          console.log($scope.contextPacks);
        });
      //$http.post('/api/packs', {packName: pack.packName, tiles: pack.tiles});
      //$http.delete('/api/packs/' + pack._id);
    };
  });
