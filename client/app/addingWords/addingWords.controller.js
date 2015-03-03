'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($scope, $http, socket) {
    $scope.currentWords = [];
    $scope.allWords = [];

    $scope.wordField = "";


    $scope.getWords = function(){
      $http.get('/api/AddingWordsDatabases').success(function(AllWordsDatabases) {
        $scope.allWords = AllWordsDatabases;
      });
    };

  //When going to the page for the first time, you have to submit something before all the previously added words will show up
    $scope.addWords = function(){
      if($scope.wordField.length >= 1) {
        <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
        $http.post('/api/AddingWordsDatabases', {words:$scope.wordField}).success(function(){
           $scope.allWords.push({words:$scope.wordField});
          $scope.getWords();
        });
        $scope.wordField = "";
      }
    };

    $scope.removeData = function(index){
      $http.delete('/api/AddingWordsDatabases/' + $scope.allWords[index]._id).success(function(){
        $scope.getWords();
      });
    };

  });
