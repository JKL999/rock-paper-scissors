


function computerPlay() {
    choice = Math.floor(Math.random() * 3);
    let hand = "";
    if (choice == 0) {hand = "Rock"}
    else if (choice == 1) {hand = "Paper"}
    else if (choice == 2) {hand = "Scissors"}
    return hand;
}

function humanPlay() {
    
    
}

function playRound(playerSelection, computerSelection) {
    let win = "You Win! " + playerSelection + " beats " + computerSelection;
    let lose = "You Lose! " + computerSelection + " beats " + playerSelection;
    let draw = "It's a Draw! You both picked " + playerSelection;
    switch(playerSelection) {
        case "Rock":
            if(computerSelection == "Scissors") return win;
            else if(computerSelection == "Paper") return lose;
            else return draw;
            break;   
        case "Paper":
            if(computerSelection == "Rock") return win;
            else if(computerSelection == "Scissors") return lose;
            else return draw;
            break;
        case "Scissors":
            if(computerSelection == "Paper") return win;
            else if(computerSelection == "Rock") return lose;
            else return draw;
            break; 
    }   
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function game() {
    let score = new Array(2);
    score[0] = 0;
    score[1] = 0;

    const buttons = document.querySelectorAll('.btn-group');

    buttons.forEach((button) => {
        button.addEventListener('click', playRound(button.innerText,computerPlay()));
    })


        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        const result = playRound(playerSelection, computerSelection);

        print_Match_Result(result);

        if(result.includes("Win")) {
            score[0]++;
        } else if (result.includes("Lose")) {
            score[1]++;
        } else {printScore(score)}
            printScore(score);
        } else if(playerSelection == "redo"){
            playerSelection = capitalize(humanPlay());
            i--;
        } else {i--;}
        
    

    if(score[0] > score[1]) {
        showWinningMessage();
    } else if(score[0] < score[1]) {
        showLosingMessage();
    } else {showDrawMessage();}

    score[0] = 0;
    score[1] = 0;
    i = 0;
}

function printScore(array) {
    console.log("The Score is: " + array[0] + " Player vs " + array[1] + " Computer")
}

function print_Match_Result(str) {
    console.log(str)
}

function showWinningMessage() {
    console.log("Congratualtions! You won the game!")
}

function showDrawMessage() {
    console.log("It's a Draw! Play again?")
}

function showLosingMessage() {
    console.log("You lose! Play again?")
}
game();