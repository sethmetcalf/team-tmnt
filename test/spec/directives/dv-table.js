'use strict';

describe('Directive: dvTable', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-table></dv-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvTable directive');
  }));
});
