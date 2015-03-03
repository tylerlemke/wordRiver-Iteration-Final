'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($scope, $http, socket) {
    $scope.currentWords = [];
    $scope.allWords = [];

    $scope.wordField = "";

    $scope.addWords = function(){
      if($scope.wordField.length >= 1) {
        <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
       // $http.post('api/pets', {text: $scope.textField, weight: $scope.textFieldWeight}).success(function(){
       //   $scope.getPets();
        $http.post('app/addingWords', {words:$scope.wordField}).success(function(){
          $scope.allWords.push({words:$scope.wordField});
        });
        $scope.wordField = "";
      }
    };

  });
