'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.views = [];
    $scope.classList = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
      $scope.totalClasses();
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.totalClasses = function(){
      for(var i=0; i<$scope.awesomeThings.length;i++){
        var found = false;
        for(var j=0; j<=$scope.classList.length; j++){
          if($scope.classList[j]==$scope.awesomeThings[i].class){
            found = true;
          }
        }
        if (!found){
          $scope.classList.push($scope.awesomeThings[i].class);
        }
      }
    };
    $scope.webPage = function(course){
      course = course.replace(/\s+/g, '');
      window.location="/"+ course;
    }
  });
