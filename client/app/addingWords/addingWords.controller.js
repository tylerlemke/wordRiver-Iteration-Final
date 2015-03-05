'use strict';

angular.module('wordRiverTeamFtlApp')
  .controller('AddingWordsCtrl', function ($rootScope, $scope, $http, socket) {
    $scope.currentWords = [];
    $scope.allWords = [];

    $scope.wordField = "";

    //beforeEach(module('wordRiverTeamFtlApp'));
    //beforeEach(module('socketMock'));

    $scope.getWords = function(){
      $http.get('/api/AddingWordsDatabases').success(function(AllWordsDatabases) {
        $scope.currentWords = AllWordsDatabases;
        $scope.allWords = $scope.currentWords;
      });
    };

    $scope.getWords();

  //When going to the page for the first time, you have to submit something before all the previously added words will show up
    $scope.addWords = function(){
      //console.log("this is before the if statement. checking the hasDuplicateValues function " + $scope.hasDuplicateValues($scope.wordField, $scope.allWords));
      if($scope.wordField.length >= 1) {
        //console.log("this is after the if statement. checking the hasDuplicateValues function " + $scope.hasDuplicateValues($scope.wordField, $scope.allWords));
          <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
          $http.post('/api/AddingWordsDatabases', {words: $scope.wordField}).success(function () {
            $scope.getWords();
            $scope.allWords.push({words: $scope.wordField});
          });
          $scope.wordField = "";
      }
    };

    $scope.hasDuplicateValues = function() {
      var input = $scope.wordField;
      var array = $scope.allWords;
      for (var i = 0; i < array.length; i++) {
        var arrayValue = array[i].words;
        if (input === arrayValue){
          alert("This word already exists.");
          return true;
        }
      }
      $scope.addWords();
      return false;

    };

    $scope.removeData = function(index){
      $http.delete('/api/AddingWordsDatabases/' + $scope.allWords[index]._id).success(function(){
        $scope.getWords();
      });
    };
//=========================================================================
    $scope.students = [];
    $scope.classList = [];
    $scope.studentList = [];
    $scope.studentSortArray = [];
    $scope.filterText = null;
    $rootScope.currentStudent = null;


    $http.get('/api/things').success(function(students) {
      $scope.students = students;
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

  //});

});
