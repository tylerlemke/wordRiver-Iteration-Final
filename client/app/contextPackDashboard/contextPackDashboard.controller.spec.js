'use strict';

describe('Controller: ContextPackDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('wordRiverTeamFtlApp'));
  beforeEach(module('socketMock'));

  var ContextPackDashboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContextPackDashboardCtrl = $controller('ContextPackDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
