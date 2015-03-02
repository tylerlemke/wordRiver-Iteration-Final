'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.views = [];
    $scope.classList = [];
    $scope.studentList = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
      $scope.totalClasses();
      $scope.populateStudentArray();
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

    $scope.populateStudentArray = function(){
      for(var i=0; i<$scope.awesomeThings.length; i++){
        for(var j=0; j<$scope.classList.length; j++){
          if($scope.awesomeThings[i].class == $scope.classList[j]){
            var name = $scope.awesomeThings[i].firstName + " " + $scope.awesomeThings[i].lastName;
            $scope.studentList.push({student: name, course: $scope.classList[j]});
          }
        }
      }
    };

    $scope.studentSort = function(course){
      for(var i=0; i<$scope.studentList.length;i++){
        if(course == $scope.studentList.course){

        }
      }
    };

    $scope.webPage = function(course){
      course = course.replace(/\s+/g, '');
      window.location="/"+ course;
    };

  });
