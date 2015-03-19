'use strict';

angular.module('WordRiverApp')
  .controller('ContextviewCtrl', function ($scope, $http, socket) {
   console.log("started running controller");

    $scope.packs = [];

    //  *//*[{name:"Greetings Pack",
    //  words: ["Hi", "Hello"]
    //  },
    //  {name:"Animal",
    //  words: ["Cat", "Dog"]}
    //];
    $scope.getContextPacks = function() {
      $http.get('/api/users/me').success(function(user) {
        console.log(user);
        $scope.packs = user.contextPacks;
        console.log($scope.packs);
        //socket.syncUpdates('student', $scope.students);
      });
    };
    $scope.getContextPacks();

    $scope.showdetails = function(pack){
      document.getElementById("coursesInfo").innerHTML = "";
      //document.getElementById("studentInfo").innerHTML = "";
      var words = "";
      for(var i = 0; i < pack.contents.length; i++) {
          words = words + pack.contents[i].wordName + "<br>";

      }
      document.getElementById("coursesInfo").innerHTML = "<u>" + pack.contextName  + "</u><br/>"
                                                        + words;
    };
  });
