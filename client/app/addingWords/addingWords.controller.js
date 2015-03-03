'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($scope, $http, socket) {
    $scope.currentWords = [];
    $scope.allWords = [
      {words:'hi'}
    ];

    $scope.wordField = "";


    $scope.getWords = function(){
      $http.get('api/AddingWordsDatabase').success(function(AllWordsDatabase) {
        $scope.allWords = AddingWordsDatabase;
      });
    };


    $scope.addWords = function(){
      if($scope.wordField.length >= 0) {
        <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
        $http.post('api/AddingWordsDatabase','app/addingWords', {words:$scope.wordField}).success(function(){
           //$scope.allWords.push({words:$scope.wordField});
          $scope.getWords();
        });
        $scope.wordField = "";
      }
    };

    $scope.removeData = function(index){
      $http.delete('/api/AddingWordsDatabase/' + $scope.allWords[index]._id).success(function(){
        $scope.getWords();
      });
    };

  });
