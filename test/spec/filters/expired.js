'use strict';

describe('Filter: expired', function () {

  // load the filter's module
  beforeEach(module('tasklistApp'));

  // initialize a new instance of the filter before each test
  var expired;
  beforeEach(inject(function ($filter) {
    expired = $filter('expired');
  }));

  it('should return the input prefixed with "expired filter:"', function () {
    var text = 'angularjs';
    expect(expired(text)).toBe('expired filter: ' + text);
  });

});
