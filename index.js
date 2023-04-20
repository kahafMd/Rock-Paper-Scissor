
let computerScore = 0;
let userScore = 0;

let resultRef = document.getElementById("result");
let choicesObject = {
    'rock': {
        'rock': 'draw',
        'paper': 'lose',
        'scissor': 'win',
    },
    'paper': {
        'rock': 'win',
        'paper': 'draw',
        'scissor': 'lose',
    },
    'scissor': {
        'rock': 'lose',
        'paper': 'win',
        'scissor': 'draw',
    }
}





function checker(input) {
    let choices = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * 3);

    let compChoice = choices[num]; 

    document.getElementById("comp-choice").innerHTML = `Computer choose  <span> ${compChoice.toUpperCase()}</span>`;


    document.getElementById("user-choice").innerHTML = `You choose <span> ${input.toUpperCase()}</span>`;

  
    switch (choicesObject[input][compChoice]) {
        case 'win':

            resultRef.style.backgroundColor = "#cefdce";
            resultRef.style.color = "green";
            resultRef.innerHTML = "YOU WIN" ;
            userScore++;
            break;
    
        case 'lose':
            
        resultRef.style.backgroundColor = "#ffdde0";
        resultRef.style.color = "red";
            resultRef.innerHTML = "YOU LOSE" ;
            computerScore++;
            break;
    
        default:
            
        resultRef.style.backgroundColor = "#e5e5e5";
        resultRef.style.color = "gray";
            resultRef.innerHTML = "DRAW"
            break;
    }
    
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("user-score").innerHTML = userScore;



}




checker();