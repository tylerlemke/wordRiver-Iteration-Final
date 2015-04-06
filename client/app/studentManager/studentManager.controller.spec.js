'use strict';

describe('Controller: StudentManagerCtrl', function () {

  // load the controller's module
  beforeEach(module('WordRiverApp'));

  var StudentManagerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentManagerCtrl = $controller('StudentManagerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
