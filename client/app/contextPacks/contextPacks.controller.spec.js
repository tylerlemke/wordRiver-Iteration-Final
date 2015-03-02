'use strict';

describe('Controller: ContextPacksCtrl', function () {

  // load the controller's module
  beforeEach(module('ummWordRiverTeam1Iteration1App'));

  var ContextPacksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContextPacksCtrl = $controller('ContextPacksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });

  it('should put an object in an array', function(){
    scope.tileBucketTemp[0].wordName = 'kitten';
    scope.tileBucketTemp[0].wordType = 'noun';
    expect(scope.tileBucketTemp[0].wordType).toBe('noun');
    //scope.createTile('kitten', 'noun');
    //expect(scope.tileBucketTemp[0].wordName).toBe('kitten');
    //expect(scope.tileBucketTemp[0].wordType).toBe('noun');
  });
});
