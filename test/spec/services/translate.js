'use strict';

describe('Service: translate', function () {

  // load the service's module
  beforeEach(module('rkisApp'));

  // instantiate service
  var translate;
  beforeEach(inject(function (_translate_) {
    translate = _translate_;
  }));

  it('should do something', function () {
    expect(!!translate).toBe(true);
  });

});
