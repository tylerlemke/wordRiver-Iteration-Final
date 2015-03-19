'use strict';

angular.module('wordRiverMergeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },  {
      'title': 'Context Pack Dashboard',
      'link': '/dashboard'
    },{
      'title': 'Adding words',
      'link':'/addingWords'
    },{
      'title': 'Overview',
      'link': '/overview'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
