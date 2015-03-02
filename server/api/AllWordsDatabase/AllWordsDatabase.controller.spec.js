'use strict';

describe('Controller: AllWordsDatabaseCtrl', function () {

  // load the controller's module
  beforeEach(module('wordRiverTeamFtlApp'));

  var AllWordsDatabaseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllWordsDatabaseCtrl = $controller('AllWordsDatabaseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
