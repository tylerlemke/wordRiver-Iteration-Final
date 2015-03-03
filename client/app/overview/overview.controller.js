'use strict';

angular.module('wordRiverSpaceshipParrotIteration1App')
  .controller('OverviewCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.awesomeStudents = [
      //{
      //  firstName: "Battle",
      //  lastName: "Rasmussen",
      //  gender: "male"
      //}
    ];

    $scope.contextPacks = [
      {packName: "heroPack",
      tiles: ["Superman", "Batman", "Hulk"]},
      {packName: "zoo",
      tiles: ["Lion", "Tiger", "Bear"]},
      {packName: "biomes",
      tiles: ["tundra", "desert", "forest"]},
      {packName: "cars",
      tiles: ["Aveo", "Ferrari", "Subaru"]},
      {packName: "disney",
      tiles: ["Frozen", "Cinderella", "Tangled"]}
    ];

    $scope.textField = "";
    $scope.tileField = "";

    $scope.showPack = false;
    $scope.currentPack = null;
    $scope.showTileAdder = false;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/students').success(function(awesomeStudents) {
      $scope.awesomeStudents = awesomeStudents;
      socket.syncUpdates('student', $scope.awesomeStudents);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.addContextPacks = function () {
      if($scope.contextPacks.length >= 1) {
        $scope.contextPacks.push({packName: $scope.textField});
        $scope.textField = "";
      }
    };

    $scope.addTile = function(){
//        $scope.contextPacks[0].tiles.push($scope.tileField);
//        $scope.tileField = "";
    };

    $scope.toggleShowAdder = function() {
        $scope.showTileAdder = !$scope.showTileAdder;
        };

    $scope.packInfo = function(pack){
      $scope.showPack = true;
      $scope.currentPack = pack;
    }
  });
