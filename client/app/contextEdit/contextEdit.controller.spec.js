'use strict';

describe('Controller: ContextEditCtrl', function () {

  // load the controller's module
  beforeEach(module('ummWordRiverTeam1Iteration1App'));
  beforeEach(module('socketMock'));

  var ContextPacksCtrl, scope;

  //beforeEach(module('myApp', function($provide) {
  //  $provide.factory('$location', {
  //    path: undefined
  //  });
  //}));

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
    scope.wordName="kitten";
    scope.wordType="noun";
    scope.addTile();
    expect(scope.tileBucketTemp[0].wordType).toBe('noun');
    expect(scope.tileBucketTemp[0].wordName).toBe('kitten');
  });

  it('should return an error message', function(){
    scope.wordName="";
    scope.wordType="noun";
    scope.addTile();
    expect(scope.message).toBe('Please enter a word and word type.');
  });

  it('should return a color', function(){
    scope.wordType="verb";
    scope.wordName="run";
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
    scope.wordName="kitten";
    scope.wordType="noun";
    scope.addTile();
    scope.wordType="verb";
    scope.addTile();
    scope.wordType="pronoun";
    scope.addTile();
    scope.wordType="adjective";
    scope.addTile();
    scope.wordType="adverb";
    scope.addTile();
    scope.wordType="preposition";
    scope.addTile();
    scope.wordType="conjunction";
    scope.addTile();
    scope.wordType="interjection";
    scope.addTile();
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
  });
  it('should return false', function(){
    expect(scope.isEmpty("kittens")).toBe(false);
  });

  //getIndex Tests Can't use location in testing
  //it('should return 1', function(){
  //  $location.url("/someurl?id=1");
  //  expect(scope.getIndex()).toBe(1);
  //});

  //inBucket tests
  it('should return false', function(){
    scope.wordType="cat";
    scope.wordName="noun";
    scope.tileBucketTemp = [{"wordName": "run",
      "wordType": "verb",
      "wordColor": "blue"},
      {"wordName": "jump",
        "wordType": "verb",
        "wordColor": "blue"},
      {"wordName": "walk",
        "wordType": "verb",
        "wordColor": "blue"}];
    expect(scope.inBucket()).toBe(false);
  });

  it('should return true', function(){
    scope.wordType="verb";
    scope.wordName="run";
    scope.tileBucketTemp = [{"wordName": "run",
      "wordType": "verb",
      "wordColor": "blue"},
      {"wordName": "jump",
        "wordType": "verb",
        "wordColor": "blue"},
      {"wordName": "walk",
        "wordType": "verb",
        "wordColor": "blue"}];
    expect(scope.inBucket()).toBe(true);
  });

});
