'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextEditCtrl', function ($scope, $http, socket, $location) {
    $scope.message = '';
    $scope.tileBucketTemp = [];

    $scope.packs = [];

    $scope.getPack = function() {
      $http.get('/api/users/me').success(function(user) {
        console.log(user);
        $scope.pack = user.contextPacks[$scope.getIndex()];
        console.log($scope.packs);
      });
    };
    $scope.getPack();

    /**
     * Gets the index of the id passed in the get array
     * @returns int the id of the context pack
     */
    $scope.getIndex = function(){
      var id = $location.url();
      id = id.split("=");
      return id[id.length-1];
    }

    $scope.isEmpty = function(input){
      return input == "";
    };

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
