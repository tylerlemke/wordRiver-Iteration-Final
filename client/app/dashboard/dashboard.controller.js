'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('DashboardCtrl', function ($scope) {
    $scope.message = 'Hello';

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
  });
