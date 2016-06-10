myApp.service("problemQuestions", function(){
    
    var questions = [
       
        {   
            text: "What happened?",
            asked: false,
            hover: false
        },
        
        {   
            text: "What was the main reasons for that?",
            asked: false,
            hover: false
        }
        
    ];
    
    return questions;
    
});