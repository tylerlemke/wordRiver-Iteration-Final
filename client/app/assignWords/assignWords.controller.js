'use strict';

angular.module('WordRiverApp')
  .controller('AssignWordsCtrl', function ($rootScope, $scope, $http, socket, Auth) {
    $scope.currentWords = [];
    $scope.allWords = [];
    $scope.checkedWords=[];
    $scope.checkedStudents=[];
    $scope.allTiles=[];
    $scope.wordField = "";
    $scope.currentUser = Auth.getCurrentUser();

    $scope.printCurrentUser = function(){
      console.log($scope.currentUser);
    };

    $scope.printCurrentUser();
    //beforeEach(module('wordRiverTeamFtlApp'));
    //beforeEach(module('socketMock'));

    $scope.getWords = function(){
      $http.get('/api/tile').success(function(allTiles) {
        $scope.allTiles = allTiles;
        for(var i= 0; i < allTiles.length; i++){
          if($scope.currentUser._id == allTiles.creatorID){
            $scope.userTiles.push(allTiles[i]);
          }
        }
        $scope.currentWords = AllWordsDatabases;
        $scope.allWords = $scope.currentWords;
      });
    };

    $scope.getWords();

    $scope.addWords = function(){
      if($scope.wordField.length >= 1) {
          <!--these words will be going into the individuals page, possibly the class words, and added to her program (words they can use) -->
          $http.post('/api/AddingWordsDatabases', {words: $scope.wordField}).success(function () {
            $scope.getWords();
            $scope.allWords.push({words: $scope.wordField});
          });
          $scope.wordField = "";
      }
    };

    $scope.removeData = function(index){
      $http.delete('/api/AddingWordsDatabases/' + $scope.allWords[index]._id).success(function(){
        $scope.getWords();
      });
    };

    $scope.checkAllCheckboxes = function(field){
      for (var i = 0; i < field.length; i++){
        field[i].checked = true;
      }
    };

    $scope.unCheckAllCheckboxes = function(field){
      for (var i = 0; i < field.length; i++){
        field[i].checked = false;
      }
    };

    $scope.isChecked = false;
    $scope.studentChecked = false;

    $scope.allCheckedWords = function(object){
      object.value = !object.value;
      if(object.value==!$scope.isChecked){
        console.log('true');
        $scope.checkedWords.push(object.words);
        console.log(object.words);
      }
      else if(object.value == false){
        console.log("false");
      }
    };

    $scope.allCheckedStudents = function(object){
      object.value = !object.value;
      if(object.value == !$scope.studentChecked){
        console.log('true');
        $scope.checkedStudents.push(object.student);
        console.log(object.student);
      }
        else if(object.value == false){
           console.log("false");
       }
    };

    // There wasn't enough time to link it to an actual id
    //$scope.wordsBeingSent = function(){
    //  for(var i=0; i< $scope.checkedStudents.length;i++) {
    //    if($scope.checkedStudents[i] == FindStudentById()){
    //      $http.post('/app/profile_id', {words: $scope.wordField}).success(function () {
    //
    //      })
    //    }
    //  };
    //
    //
    //};
});
