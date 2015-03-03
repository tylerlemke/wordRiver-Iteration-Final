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
      tiles: ["Superman", "Batman"]},
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

    $scope.showPack = true;
    $scope.currentPack = $scope.contextPacks[4];

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
        $scope.contextPacks.push({pack: $scope.textField});
        $scope.textField = "";
      }
    };

    $scope.packInfo = function(pack){
      $scope.showPack = true;
      $scope.currentPack = pack;
    }
  });
