var questionCount = 0;

function myFunction(operation){
    var num1 = document.getElementById('num1').value; //randomly generated
    var num2 = document.getElementById('num2').value; //randomly generated
    var answer = document.getElementById('answer').value;
    var ans = 0;

    if(questionCount === 15){
        //check if pass mark greater than or equal to 80 and increment level
        //if not, show a message and ask if them want to redo
    }
    
    switch (operation) {

        case '+':
            ans = num1 + num2;

            if(answer === ans){
                questionCount++; //increase question count and show next question
                //or do whatever else
            }
        break;

        case '-':
        break;
    }
}