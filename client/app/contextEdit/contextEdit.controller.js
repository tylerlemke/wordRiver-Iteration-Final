'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextEditCtrl', function ($scope, $http, socket, $location) {
    $scope.message = '';
    $scope.tileBucketTemp = [];
    $scope.wordName = "";
    $scope.wordType="";

    $scope.packs = [];

    $scope.getPack = function() {
      $http.get('/api/users/me').success(function(user) {
        //console.log(user);
        $scope.pack = user.contextPacks[$scope.getIndex()];
        //console.log($scope.packs);
        $scope.tileBucketTemp = user.tileBucket;
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
    };

    $scope.isEmpty = function(input){
      return input == "";
    };

    $scope.addTile = function(){
      if (!$scope.isEmpty($scope.wordName) && !$scope.isEmpty($scope.wordType)) {
        if(!$scope.inBucket($scope.wordName, $scope.wordType)) {
          $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {
            "wordName": $scope.wordName,
            "wordType": $scope.wordType,
            "wordColor": $scope.addColorToTile($scope.wordType)
          };
        }
      }else {
        $scope.message = "Please enter a word and word type."
      }
    };

    /**
     * Checks if the word is in the tileBucket
     */
    $scope.inBucket = function(){
      angular.forEach($scope.tileBucketTemp, function(value, key) {
        console.log($scope.wordName.toLowerCase()+" "+ value.wordName.toLowerCase()+" "+$scope.wordType.toLowerCase()+" "+$scope.value.wordType.toLowerCase());
        if (value.wordName.toLowerCase() == $scope.wordName.toLowerCase() && value.wordType.toLowerCase() == $scope.wordType.toLowerCase()){
          return true;
        }
      });
      return false;
    }

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
