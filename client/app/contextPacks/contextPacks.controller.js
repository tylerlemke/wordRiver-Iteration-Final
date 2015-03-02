'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextPacksCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.tileBucketTemp = [];


var addTile = function(wordName, wordType){
  $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {"wordName": wordName, "wordType": wordType};
};




});
