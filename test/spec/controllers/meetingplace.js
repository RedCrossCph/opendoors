'use strict';

describe('Controller: MeetingplaceCtrl', function () {

  // load the controller's module
  beforeEach(module('rkisApp'));

  var MeetingplaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingplaceCtrl = $controller('MeetingplaceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
