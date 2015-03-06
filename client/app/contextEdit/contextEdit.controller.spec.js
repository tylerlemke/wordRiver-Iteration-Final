'use strict';

describe('Controller: ContextEditCtrl', function () {

  // load the controller's module
  beforeEach(module('ummWordRiverTeam1Iteration1App'));
  beforeEach(module('socketMock'));

  var ContextPacksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContextPacksCtrl = $controller('ContextEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });

  it('should put an object in an array', function(){
    scope.addTile("kitten", "noun");
    expect(scope.tileBucketTemp[0].wordType).toBe('noun');
    expect(scope.tileBucketTemp[0].wordName).toBe('kitten');
  });

  it('should return an error message', function(){
    scope.addTile("", "verb");
    expect(scope.message).toBe('Please enter a word and word type.');
  });

  it('should return a color', function(){
    expect(scope.addColorToTile('adjective')).toBe('yellow');
    expect(scope.addColorToTile('conjunction')).toBe('purple');
    expect(scope.addColorToTile('noun')).toBe('green');
    expect(scope.addColorToTile('verb')).toBe('blue');
    expect(scope.addColorToTile('pronoun')).toBe('pink');
    expect(scope.addColorToTile('adverb')).toBe('orange');
    expect(scope.addColorToTile('preposition')).toBe('tan');
    expect(scope.addColorToTile('interjection')).toBe('gray');
    expect(scope.addColorToTile('blah')).toBe('white');
    expect(scope.addColorToTile('')).toBe('white');
  });

  it('should put a color in a tile object', function(){
    scope.addTile("kitten", "noun");
    scope.addTile("kitten", "verb");
    scope.addTile("kitten", "pronoun");
    scope.addTile("kitten", "adjective");
    scope.addTile("kitten", "adverb");
    scope.addTile("kitten", "preposition");
    scope.addTile("kitten", "conjunction");
    scope.addTile("kitten", "interjection");
    expect(scope.tileBucketTemp[0].wordColor).toBe('green');
    expect(scope.tileBucketTemp[1].wordColor).toBe('blue');
    expect(scope.tileBucketTemp[2].wordColor).toBe('pink');
    expect(scope.tileBucketTemp[3].wordColor).toBe('yellow');
    expect(scope.tileBucketTemp[4].wordColor).toBe('orange');
    expect(scope.tileBucketTemp[5].wordColor).toBe('tan');
    expect(scope.tileBucketTemp[6].wordColor).toBe('purple');
    expect(scope.tileBucketTemp[7].wordColor).toBe('gray');
  });

// isEmpty tests

  it('should return true', function(){
    expect(scope.isEmpty("")).toBe(true);
  })
  it('should return false', function(){
    expect(scope.isEmpty("kittens")).toBe(false);
  })

});
