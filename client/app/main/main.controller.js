'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.classList = [];
    $scope.studentList = [];
    $scope.studentSortArray = [];
    $scope.filterText = null;
    $rootScope.currentStudent = null;

    //view[0] = kindergarten page
    //view[1] = firstGrade page

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

    //creates a list of all classes that exist
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
{

    }

    //creates a list of students
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


    //changes the class view
    $scope.changeFilter = function(str){
      $scope.filterText = str;
    };

    $scope.makeCurrentStudent = function(student){
      $rootScope.currentStudent = student;
    };

  });
