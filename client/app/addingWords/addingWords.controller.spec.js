'use strict';

describe('Controller: AddingWordsCtrl', function () {

  // load the controller's module
  beforeEach(module('wordRiverTeamFtlApp'));

  var AddingWordsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddingWordsCtrl = $controller('AddingWordsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
