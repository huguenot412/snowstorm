myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
    
    $scope.collapseAll = function(){
        $(".panel-collapse").removeClass("in").attr({ariaExpanded: "false", style: "height: 0px;"});
        
    }
    
    $scope.expandAll = function(){
        $(".panel-collapse").addClass("in").attr("aria-expanded", "true").removeAttr("style");
    }
    
    $scope.data = {
        name: "Chris Snow",
        contactName: "CONTACT",
        productName: "PRODUCT",
        timeForCall: null,
        role: "ROLE",
        task: "",
        locations: "1",
        reason: null
    };
    
    $scope.detectProduct = function(product){
        if(product == "Acronis Backup" || product == "Acronis Backup Advanced"){
            return true;
        } else {
            return false;
        }
    }
    
    $scope.getSolutionType = function(product){
        if (product == "PRODUCT") {
            return "";
        }
        else if(product == "Acronis Snap Deploy") {
            return "deployment";
        } else {
            return "backup";
        }
    }
       
    $scope.getTemplateUrl = function(className) {
        return "templates/" + className + ".html";
    }
    
    $scope.sections = [
        
        {
            title: "Call Prep",
            className: "callPrep",
            icon: "ion-search",
            data: $scope.data
        },
        {
            title: "Introduction",
            className: "introduction",
            icon: "ion-android-contacts",
            data: $scope.data
        },       
        {
            title: "Situation",
            className: "situation",
            icon: "ion-help",
            data: $scope.data
        },
        {
            title: "Problem",
            className: "problem",
            icon: "ion-nuclear",
            data: $scope.data
        },
        {
            title: "Implication",
            className: "implication",
            icon: "ion-alert",
            data: $scope.data
        },
        {
            title: "Need Payoff",
            className: "needPayoff",
            icon: "ion-cash",
            data: $scope.data
        },
        {
            title: "Next Steps",
            className: "nextSteps",
            icon: "ion-skip-forward",
            data: $scope.data
        }
        
    ];
    
}]);