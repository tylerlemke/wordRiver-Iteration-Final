'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($scope, $http, socket) {
    $scope.currentWords = [];
    $scope.allWords = [];

    $scope.wordField = "";

    //beforeEach(module('wordRiverTeamFtlApp'))
    //beforeEach(module('socketMock'));

    $scope.getWords = function(){
      $http.get('/api/AddingWordsDatabases').success(function(AllWordsDatabases) {
        $scope.allWords = AllWordsDatabases;
      });
    };

  //When going to the page for the first time, you have to submit something before all the previously added words will show up
    $scope.addWords = function(){
      console.log("this is before the if statement. checking the hasDuplicateValues function " + $scope.hasDuplicateValues($scope.wordField, $scope.allWords));
      if($scope.wordField.length >= 1 && $scope.hasDuplicateValues($scope.wordField, $scope.allWords) == false) {
        console.log("this is after the if statement. checking the hasDuplicateValues function " + $scope.hasDuplicateValues($scope.wordField, $scope.allWords));
          <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
          $http.post('/api/AddingWordsDatabases', {words: $scope.wordField}).success(function () {
            $scope.getWords();
            $scope.allWords.push({words: $scope.wordField});
            console.log($scope.allWords.length);
          });
          $scope.wordField = "";
      }
    };

    $scope.hasDuplicateValues = function(input, array) {
      for (var i = 0; i < array.length; i++) {
        var arrayValue = array[i].words;
        if (input === arrayValue){
          return true;
        }
      }
      return false;
    };

    $scope.removeData = function(index){
      $http.delete('/api/AddingWordsDatabases/' + $scope.allWords[index]._id).success(function(){
        $scope.getWords();
      });
    };

  });
