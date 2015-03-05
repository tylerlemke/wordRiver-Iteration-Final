'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextEditCtrl', function ($scope) {
    $scope.message = '';
    $scope.tileBucketTemp = [];

    $scope.packs = [
      {name:"Greetings Pack",
        words: ["Hi", "Hello"]
      },
      {name:"Animal",
        words: ["Cat", "Dog"]}
    ];

    $scope.isEmpty = function(input){
      return input == "";
    }

    $scope.addTile = function(wordName, wordType){
      if (!$scope.isEmpty(wordName) && !$scope.isEmpty(wordType)) {
        $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {
          "wordName": wordName,
          "wordType": wordType,
          "wordColor": $scope.addColorToTile(wordType)
        };
      }
      else {
        $scope.message = "Please enter a word and word type."
      }
    };

    $scope.addColorToTile = function(wordType){

      if(wordType == 'noun'){
        return 'green';
      }
      else if(wordType == 'verb'){
        return 'blue';
      }
      else if(wordType == 'pronoun'){
        return 'pink';
      }
      else if(wordType == 'adjective'){
        return 'yellow';
      }
      else if(wordType == 'adverb'){
        return 'orange';
      }
      else if(wordType == 'preposition'){
        return 'tan';
      }
      else if(wordType == 'conjunction'){
        return 'purple';
      }
      else if(wordType == 'interjection'){
        return 'gray';
      }
      else{
        return 'white';
      }
    };
  });
