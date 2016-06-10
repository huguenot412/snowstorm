myApp.controller('mainController', ['$scope', '$http', 'problemQuestions', function($scope, $http, problemQuestions){
    
    $scope.shadowBoxShow = false;
    $scope.enterInfo = false;
    
    $scope.userData = {
        firstName: "",
        lastName: "",
        role: "",
        submitUserData: function(){
            
            if(this.firstName == "" || this.lastName == "" || this.role == ""){
                $scope.enterInfo = true;
                return;
            }
            
            localStorage.setItem("firstName", this.firstName);
            localStorage.setItem("lastName", this.lastName);
            localStorage.setItem("role", this.role);
            
            $scope.enterInfo = false;
            $scope.shadowBoxShow = false;
            
        },
        
        resetUserData: function(){
            $scope.shadowBoxShow = true;
        }
    }
    
    if( localStorage.firstName && localStorage.lastName && localStorage.role ) {
        $scope.userData.firstName = localStorage.firstName;
        $scope.userData.lastName = localStorage.lastName;
        $scope.userData.role = localStorage.role;
    } else {
        $scope.shadowBoxShow = true;
    }
    
    $scope.collapseAll = function(){
        $(".panel-collapse").removeClass("in").attr({ariaExpanded: "false", style: "height: 0px;"});
    }
    
    $scope.detectHover = function(question){
        if(question.hover){
            return "fadedCheckmark";
        }
    }
    
    $scope.expandAll = function(){
        $(".panel-collapse").addClass("in").attr("aria-expanded", "true").removeAttr("style");
    }
    
    $scope.data = {
        contactFirstName: "",
        contactLastName: "",
        productName: "",
        timeForCall: null,
        role: "",
        task: "",
        locations: "",
        companyInfo: "",
        reason: null,
        budget: "",
        timeframe: "",
        companyName: "",
        companyDescription: "",
        userData: $scope.userData,
        customIntro: localStorage.customIntro || "You don't have a saved custom introduction.",
        editingIntro: false,
        customIntroDisplay: false,
        problemQuestions: problemQuestions
    };
    
    $scope.customIntro = "";
    
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
    
    $scope.detectCustomIntro = function(){
        if(localStorage.customIntro){
            return "Edit Intro";
        } else {
            return "Create Intro";
        }
    }
    
    $scope.saveCustomIntro = function(){
        localStorage.setItem("customIntro", $scope.data.customIntro);
        $scope.data.customIntro = localStorage.customIntro;
        $scope.data.editingIntro = false;
    }
       
    $scope.getTemplateUrl = function(className) {
        return "templates/" + className + ".html";
    }
    
    $scope.toggleAsked = function(question) {
        
        question.hover = false;
        
        if( question.asked == false ) {
            question.asked = true;
        } else {
            question.asked = false;
        }
        
    }
    
    $scope.sections = [
        
        {
            title: "Call Prep",
            description: "Do your homework. Showing the client that you are familiar with their organization can help you to ask more meaningful, directed questions and establish your credibility as a consultant.",
            className: "callPrep",
            icon: "ion-search",
            data: $scope.data
        },
        {
            title: "Introduction",
            description: "Let them know who you are and why you are calling. Define yourself as their backup consultant rather than as their salesperson. They are more likely to open up to you if they see you as someone who is there to help them solve their problems instead of someone who is trying to sell them something.",
            className: "introduction",
            icon: "ion-android-contacts",
            data: $scope.data
        },       
        {
            title: "Situation",
            description: "Stay \"top of funnel\" and learn as much as you can about their organization. Once you start talking about the specifics of their project it may be difficult or awkward to get this important information.",
            className: "situation",
            icon: "ion-help",
            data: $scope.data
        },
        {
            title: "Problem",
            description: "Find out why they are looking for a solution and what their pain points are.",
            className: "problem",
            icon: "ion-nuclear",
            data: $scope.data
        },
        {
            title: "Implication",
            description: "Guide them to understand the consequences of not using our solution. Try to get them to come to the conclusion on thier own. Challenge them to think of potential problems or scenarios they may not have considered before.",
            className: "implication",
            icon: "ion-alert",
            data: $scope.data
        },
        {
            title: "Need Payoff",
            description: "Be their consultant and show them how our solution can alleviate their specific pain points.",
            className: "needPayoff",
            icon: "ion-cash",
            data: $scope.data
        },
        {
            title: "Next Steps",
            description: "Agree on everyone's next steps and schedule a specific date and time for a follow up. Leaving this to chance is the best way to ensure that you will be leaving them lots of voicemails",
            className: "nextSteps",
            icon: "ion-skip-forward",
            data: $scope.data
        }
        
    ];
    
}]);