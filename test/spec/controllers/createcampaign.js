'use strict';

describe('Controller: CreatecampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('rkisApp'));

  var CreatecampaignCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecampaignCtrl = $controller('CreatecampaignCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
