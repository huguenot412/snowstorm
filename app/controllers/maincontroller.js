myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
    
    $scope.collapseAll = function(){
        $(".panel-collapse").removeClass("in");
        
    }
    
    $scope.name = "Chris Snow";
    $scope.contactName;
    $scope.productName = "Product Name";
    $scope.timeForCall;
    $scope.role;
    $scope.task;
    $scope.template = "content";
    
    $scope.detectProduct = function(product){
        if(product == "Acronis Backup" || product == "Acronis Backup Advanced"){
            return true;
        } else {
            return false;
        }
    }
    
    $scope.expandAll = function(){
        $(".panel-collapse").addClass("in");
    }
    
    $scope.sections = [
        
        {
            title: "Call Prep",
            className: "callPrep",
            icon: "ion-search",
            directive: "<call-prep></call-prep>"
        },
        {
            title: "Introduction",
            className: "introduction",
            icon: "ion-android-contacts",
            directive: "intro-questions"
        },       
        {
            title: "Situation",
            className: "situation",
            icon: "ion-help",
            directive: "situation"
        },
        {
            title: "Problem",
            className: "problem",
            icon: "ion-nuclear",
            directive: "problem"
        },
        {
            title: "Implication",
            className: "implication",
            icon: "ion-alert",
            directive: "implication"
        },
        {
            title: "Need Payoff",
            className: "needPayoff",
            icon: "ion-cash",
            directive: "need-payoff"
        },
        {
            title: "Next Steps",
            className: "nextSteps",
            icon: "ion-skip-forward",
            directive: "next-steps"
        }
        
    ];
    
}]);