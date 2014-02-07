'use strict';

angular.module('teamTmntApp')
  .directive('smColor', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.css('color', attrs.smColor);
      }
    };
  });
