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

    $scope.getContextPacks = function () {
      $http.get('/api/packs').success(function (contextPacks) {
        $scope.contextPacks = contextPacks;
      });
    };

    $scope.getContextPacks();

    $http.get('/api/students').success(function(awesomeStudents) {
      $scope.awesomeStudents = awesomeStudents;
      socket.syncUpdates('student', $scope.awesomeStudents);
    });

    $scope.addPack = function() {
      if($scope.newPack === '') {
        return;
      }
      $http.post('/api/packs', { packName: $scope.newPack });
      $scope.newPack = '';
    };

    $scope.deletePack = function(pack) {
      $http.delete('/api/packs/' + pack._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addContextPacks = function () {
      if ($scope.textField.length >= 1) {
        $http.post('/api/packs', {packName: $scope.textField}).success(function () {
          $scope.getContextPacks();
        });
      };
    };

    $scope.packInfo = function(pack){
      $scope.showPack = true;
      $scope.currentPack = pack;
    }
  });
