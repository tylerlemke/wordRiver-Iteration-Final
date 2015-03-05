'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, socket) {
    $scope.students = [];
    $scope.classList = [];
    $scope.studentList = [];
    $scope.studentSortArray = [];
    $scope.filterText = null;
    $rootScope.currentStudent = null;


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.students = awesomeThings;
      socket.syncUpdates('thing', $scope.students);
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
      for(var i=0; i<$scope.students.length;i++){
        var found = false;
        for(var j=0; j<=$scope.classList.length; j++){
          if($scope.classList[j]==$scope.students[i].class){
            found = true;
          }
        }
        if (!found){
          $scope.classList.push($scope.students[i].class);
        }
      }
    };

    //creates a list of students
    $scope.populateStudentArray = function(){
      for(var i=0; i<$scope.students.length; i++){
        for(var j=0; j<$scope.classList.length; j++){
          if($scope.students[i].class == $scope.classList[j]){
            var name = $scope.students[i].firstName + " " + $scope.students[i].lastName;
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
