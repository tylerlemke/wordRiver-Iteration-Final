'use strict';

angular.module('ummWordRiverTeam1Iteration1App')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          contextPacks: [{
            contextName: "Verbs/Actions",
            contents:[
              {wordName: "run",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "jump",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "walk",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "talk",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "swim",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "talk",
                wordType: "verb",
                wordColor: "green"},
              {wordName: "climb",
                wordType: "verb",
                wordColor: "green"}
            ]},
            {
              contextName: "Animals",
              contents:[
                {wordName: "Cat",
                  wordType: "noun",
                  wordColor: "green"},
                {wordName: "Dog",
                  wordType: "noun",
                  wordColor: "blue"},
                {wordName: "Zebra",
                  wordType: "noun",
                  wordColor: "blue"},
                {wordName: "Lama",
                  wordType: "noun",
                  wordColor: "green"},
                {wordName: "Horse",
                  wordType: "noun",
                  wordColor: "green"},
                {wordName: "Bird",
                  wordType: "noun",
                  wordColor: "green"},
                {wordName: "Lizard",
                  wordType: "noun",
                  wordColor: "green"}
              ]

            }
          ]
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
