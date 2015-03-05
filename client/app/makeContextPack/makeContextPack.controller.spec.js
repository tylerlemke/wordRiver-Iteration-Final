'use strict';

describe('Controller: MakeContextPackCtrl', function () {

  // load the controller's module
  beforeEach(module('wordRiverTeamFtlApp'));
  beforeEach(module('socketMock'));


  var MakeContextPackCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MakeContextPackCtrl = $controller('MakeContextPackCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
