'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('TileBucketCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.tileBucket = [];

    $scope.getTileBucket = function() {
      $http.get('/api/users/me').success(function(user) {
        console.log(user);
        $scope.tileBucket = user.tileBucket;
        console.log($scope.tileBucket);
        //socket.syncUpdates('student', $scope.students);
      });
    };
    $scope.getContextPacks();
  });

