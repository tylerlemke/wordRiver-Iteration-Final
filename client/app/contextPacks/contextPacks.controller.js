'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextPacksCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.tileBucketTemp = [];


$scope.addTile = function(wordName, wordType){
  $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {"wordName": wordName, "wordType": wordType, "wordColor": $scope.addColorToTile(wordType)};
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
