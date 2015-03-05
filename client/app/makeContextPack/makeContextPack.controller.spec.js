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

  it('testing changeGradeLevel function', function () {
    scope.gradeLevel = 'Kindergarten';
    scope.changeGradeLevel('First Grade');
    expect(scope.gradeLevel).toEqual('First Grade');
  });

  it('testing changeView function to display first case of first alert', function () {
    scope.nameField = 'aa';
    expect(scope.changeView()).toBe(alert("Your pack's name needs to be greater than 2 characters, and less than 30."));
  });

  it('testing changeView function to display second case of first alert ', function () {
    scope.nameField = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(scope.changeView()).toBe(alert("Your pack's name needs to be greater than 2 characters, and less than 30."));
  });


  it('testing changeView function to display second alert ', function () {
    scope.nameField = 'Reasonable Name';
    expect(scope.changeView()).toBe(alert("You need to select a recommended grade level."));
  });
  it('testing changeView function correctly change setUp boolean', function () {
    scope.nameField = 'Reasonable Name';
    scope.gradeLevel = 'Kindergarten';
    scope.changeView();
    expect(scope.setUp).toEqual(false);

  });

  it('testing addWord function', function () {
    expect(scope.words.length).toEqual(0);
    scope.addWordField = 'word';
    scope.addWord();
    expect(scope.addWordField).toEqual('');
    expect(scope.words.length).toEqual(1);
    expect(scope.words[0]).toEqual('word');
  });

});
