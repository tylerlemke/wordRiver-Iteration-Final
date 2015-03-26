'use strict';

angular.module('WordRiverApp')
  .controller('WordManagerCtrl', function ($scope, $http, socket, Auth) {
    $scope.categoryField = "";
    $scope.addField = "";
    $scope.searchField = "";
    $scope.categoryArray = [];
    $scope.currentUser = Auth.getCurrentUser();

    $scope.getCategories = function() {
        $scope.categoryArray = $scope.currentUser.contextPacks;
        console.log($scope.categoryArray[0]);
      };

    $scope.getCategories();

    $scope.deletePack = function(index) {
      $http.delete('/api/packs/' + $scope.contextPacks[index]._id)
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addCategory = function () {
      if ($scope.categoryField.length >= 1) {
        $scope.categoryArray.push($scope.categoryField);
        $http.patch('/api/users/' + $scope.currentUser._id,
          {contextPacks: $scope.categoryArray}
        ).success(function(){
            console.log('success?');
          });
      }
      $scope.categoryField="";
      $scope.getCategories();
    };
  //
  //  $scope.addWord = function() {
  //    if ($scope.tileField.length >= 1) {
  //      $scope.currentPack.tiles.push($scope.tileField);
  //
  //      $http.patch('/api/packs/' + $scope.currentPack._id,
  //        {tiles: $scope.currentPack.tiles}
  //      ).success(function(){
  //          console.log("Patch completed!");
  //          console.log($scope.contextPacks);
  //        });
  //
  //      //$http.post('/api/packs', {packName: $scope.currentPack.packName, tiles: $scope.currentPack.tiles});
  //      //$http.delete('/api/packs/' + $scope.currentPack._id);
  //      $scope.tileField = "";
  //
  //    }
  //  };
  //
  //  $scope.deleteWord = function(pack, index) {
  //    pack.tiles.splice(index, 1);
  //    $http.patch('/api/packs/' + pack._id,
  //      {tiles: pack.tiles}
  //    ).success(function() {
  //        console.log("Patch completed!");
  //        console.log($scope.contextPacks);
  //      });
  //    //$http.post('/api/packs', {packName: pack.packName, tiles: pack.tiles});
  //    //$http.delete('/api/packs/' + pack._id);
  //  };
  });
