'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('ContextviewCtrl', function ($scope) {
    $scope.packs = [
      {name:"Greetings Pack",
      words: ["Hi", "Hello"]
      },
      {name:"Animal",
      words: ["Cat", "Dog"]}
    ];

    $scope.showdetails = function(pack){
      document.getElementById("coursesInfo").innerHTML = "";
      //document.getElementById("studentInfo").innerHTML = "";
      var words = "";
      for(var i = 0; i < pack.words.length; i++) {
          words = words + pack.words[i] + "<br>";

      }
      document.getElementById("coursesInfo").innerHTML = "<u>" + pack.name  + "</u><br/>"
                                                        + words;
    };
  });
