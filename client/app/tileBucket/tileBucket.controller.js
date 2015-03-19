'use strict';

angular.module('WordRiverApp')
  .controller('TileBucketCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    $scope.tileBucket = [];

    $scope.getTileBucket = function() {
      $http.get('/api/users/me').success(function(user) {
        console.log('We got a user!!');
        $scope.tileBucket = user.tileBucket;
        console.log($scope.tileBucket);
        //socket.syncUpdates('student', $scope.students);
      });
    };
    $scope.getTileBucket();
  });

