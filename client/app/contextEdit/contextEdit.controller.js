'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextEditCtrl', function ($scope, $http, socket, $location) {
    $scope.message = '';
    $scope.tileBucketTemp = [];
    $scope.wordName = "";
    $scope.wordType=  "";
    $scope.id="";
    $scope.index ="";

    $scope.packs = [];

    $scope.getPack = function() {
      $http.get('/api/users/me').success(function(user) {
        $scope.index=$scope.getIndex();
        $scope.id = user._id;
        $scope.pack = user.contextPacks[$scope.index];
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

        $scope.message="";
        $scope.pack.contents[$scope.pack.contents.length] = {
          "wordName": $scope.wordName,
          "wordType": $scope.wordType,
          "wordColor": $scope.addColorToTile($scope.wordType)
        };
        if(!$scope.inBucket($scope.wordName, $scope.wordType)) {
          $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {
            "wordName": $scope.wordName,
            "wordType": $scope.wordType,
            "wordColor": $scope.addColorToTile($scope.wordType)
          };
        }
        $scope.wordName ="";
        $scope.wordType="";
      }else {
        $scope.message = "Please enter a word and word type."
      }
    };

    /**
     * Checks if the word is in the tileBucket
     * Can't use angular.foreach, it changes types or something and breaks test
     */
    $scope.inBucket = function(){
      for(var i = 0; i < $scope.tileBucketTemp.length; i++){
        if ($scope.tileBucketTemp[i].wordName.toLowerCase() == $scope.wordName.toLowerCase() && $scope.tileBucketTemp[i].wordType.toLowerCase() == $scope.wordType.toLowerCase()){
          return true;
        }
      }
      return false;
    };


    //$scope.updatePack = function(){
    //    $http.post('/api/user/'+user._id+'/updatePack', {pack: $scope.pack, id: $scope.id });
    //};
    //$scope.updateBucket = function(){
    //  $http.post('/api/user/'+$scope.id'/updateBucket', { bucket: $scope.tileBucketTemp, id: $scope.id });
    //};

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
      else if(wordType == 'article'){
        return 'gray';
      }
      else{
        return 'white';
      }
    };
  });
