'use strict';

describe('Controller: CreatemeetingplaceCtrl', function () {

  // load the controller's module
  beforeEach(module('rkisApp'));

  var CreatemeetingplaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatemeetingplaceCtrl = $controller('CreatemeetingplaceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
