let computerChoices = document.getElementById("computerChoice");
let userChoice = document.getElementById("userChoice");
let result = document.getElementById("result");
let randomNo;


function generate(event){
    if(event.id == "rock"){
        rock();
    }
    else if(event.id == "paper"){
        paper();
    }
    else if(event.id == "scissor"){
        scissor();
    }
}

function rock(){
    userChoice.innerHTML = "Rock";
    generateComputerChoice();
    generateResult();
}

function paper(){
    userChoice.innerHTML = "Paper";
    generateComputerChoice();
    generateResult();
}

function scissor(){
    userChoice.innerHTML = "Scissor";
    generateComputerChoice();
    generateResult();
}



function generateComputerChoice(){
    randomNo = Math.floor(Math.random() * 3);
    
    if(randomNo === 0){
        computerChoices.innerHTML = "Rock"; 
    } 
    else if(randomNo === 1){
        computerChoices.innerHTML = "Paper";
    }
    else if(randomNo === 2){
        computerChoices.innerHTML = "Scissor";
    }
}


function generateResult(){
    if(userChoice.innerHTML === "Rock" && computerChoices.innerHTML === "Rock"){
        result.innerHTML = "It's a DRAW";
    }
    else if(userChoice.innerHTML === "Rock" && computerChoices.innerHTML === "Paper"){
        result.innerHTML = "You LOSS";
    }
    else if(userChoice.innerHTML === "Rock" && computerChoices.innerHTML === "Scissor"){
        result.innerHTML = "You WIN";
    }
    else if(userChoice.innerHTML === "Paper" && computerChoices.innerHTML === "Paper"){
        result.innerHTML = "It's a DRAW";
    }
    else if(userChoice.innerHTML === "Paper" && computerChoices.innerHTML === "Rock"){
        result.innerHTML = "You WIN";
    }
    else if(userChoice.innerHTML === "Paper" && computerChoices.innerHTML === "Scissor"){
        result.innerHTML = "You LOSS";
    }
    else if(userChoice.innerHTML === "Scissor" && computerChoices.innerHTML === "Scissor"){
        result.innerHTML = "It's a DRAW";
    }
    else if(userChoice.innerHTML === "Scissor" && computerChoices.innerHTML === "Rock"){
        result.innerHTML = "You LOSS";
    }
    else if(userChoice.innerHTML === "Scissor" && computerChoices.innerHTML === "Paper"){
        result.innerHTML = "You WIN";
    }
    
}
