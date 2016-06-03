var myApp = angular.module("myApp", []);

//myApp.directive("introQuestions", function() {
//    return {
//        templateUrl: "templates/questions.html",
//        replace: true,
//        restrict: "ACE"
//    } 
//});

//myApp.controller('directiveController', ["$rootScope", function($rootScope){
//    console.log("anyOldString");
//    
//}]);

//myApp.directive("content", function() {
//    return {
//        templateUrl: "templates/questions.html",
//        replace: true,
//        restrict: "ACE",
//        scope: true,
//        link: function(scope,elem,attr){
//          // code goes here ...
//        }
//    }
//});

myApp.directive("content", function() {
  return {
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      restrict: "ACE",
      scope: true,
      controller: function($scope) {
          $scope.getTemplateUrl = function() {
              return $scope.section.title + ".html";
            }
        }
    }
});