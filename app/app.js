var myApp = angular.module("myApp", []);

myApp.directive("sectionContent", function() {
  return {
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      restrict: "ACE",
      scope: false,
      controller: function($scope) {
          $scope.getTemplateUrl = function() {
              return "templates/" + $scope.section.className + ".html";
            }
        }
    }
});