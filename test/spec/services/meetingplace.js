'use strict';

describe('Service: meetingplace', function () {

  // load the service's module
  beforeEach(module('rkisApp'));

  // instantiate service
  var meetingplace;
  beforeEach(inject(function (_meetingplace_) {
    meetingplace = _meetingplace_;
  }));

  it('should do something', function () {
    expect(!!meetingplace).toBe(true);
  });

});
