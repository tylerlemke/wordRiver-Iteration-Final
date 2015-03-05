/**
 * Created by lynch446 on 2/27/15.
 */
'use strict';

describe('Controller: ProfileCtrl', function (){
  //load the module for controller
  beforeEach(module('wordRiverTeamFtlApp'));
  beforeEach(module('socketMock'));

  var ProfileCtrl,
    scope,
    $httpBackend;

  //Intitialize the controller and mock scope
  beforeEach(inject(function($httpBackend, $controller, $rootScope){
    $httpBackend = $httpBackend ;
    $httpBackend.expectGet('/api/things')
      .respond(['HTML5 BoilderPlate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope
    });
  }));
  // to add testing as we gain new objects.

});
