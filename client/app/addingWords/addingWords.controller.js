'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($scope, $http, socket) {
    $scope.currentWords = [];
    $scope.newWords = [];


    //$scope.addData = function(){
    //  if($scope.textField.length >= 1 && $scope.textFieldWeight >= 0) {
    //    $http.post('api/pets', {text: $scope.textField, weight: $scope.textFieldWeight}).success(function(){
    //      $scope.getPets();
    //    });
    //    $scope.textField = "";
    //    $scope.textFieldWeight = "";
    //  }
    //};

  });
