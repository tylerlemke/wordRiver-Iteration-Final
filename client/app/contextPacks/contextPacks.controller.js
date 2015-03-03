'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextPacksCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.tileBucketTemp = [];


$scope.addTile = function(wordName, wordType){
  $scope.tileBucketTemp[$scope.tileBucketTemp.length] = {"wordName": wordName, "wordType": wordType};
};

});
