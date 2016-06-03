var myApp = angular.module("myApp", []);

myApp.directive("sectionContent", function() {
  return {
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      restrict: "ACE",
      scope: true,
      controller: function($scope) {
          $scope.getTemplateUrl = function() {
              return $scope.section.className + ".html";
            }
        }
    }
});