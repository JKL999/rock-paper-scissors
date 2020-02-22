const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //reset Hands every round
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                

                setTimeout(() => {
                    //Decide who wins
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        });
        
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        switch(playerChoice) {
            case "rock":
                if(computerChoice == "scissors") {
                    winner.textContent = 'Player Wins'; 
                    pScore++;
                    updateScore();
                    return;
                }
                else if(computerChoice == "paper") {
                    winner.textContent = 'Computer Wins'; 
                    cScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent = 'It is a tie';
                    return;
                } break;   

            case "paper":
                if(computerChoice == "scissors") {
                    winner.textContent = 'Computer Wins'; 
                    cScore++;
                    updateScore();
                    return;
                }
                else if(computerChoice == "paper") {
                    winner.textContent = 'It is a tie'; 
                    return;
                }
                else {
                    winner.textContent = 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                } break;

            case "scissors":
                if(computerChoice == "scissors") {
                    winner.textContent = 'It is a tie'; 
                    return;
                }
                else if(computerChoice == "paper") {
                    winner.textContent = 'Player Wins'; 
                    pScore++;
                    updateScore();
                    return;
                }
                else {
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                } break;
        } 
        
    }
    //Call all inner functions
    startGame();
    playMatch();
};

//Start the game
game();