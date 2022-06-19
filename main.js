const choices = ['rock', 'paper', 'scissors']
const winners = [];

function game() {
    for(let i = 0; i <= 5; i++) {
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection); 
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner,)
}

function playerChoice() {
    let input = prompt('Please enter rock, paper or scissors');
    while(input == null) {
        input = prompt('Please enter rock, paper or scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
      input = prompt(
        'Please type rock, paper or scissors - spelling matters but capitalization does not');
        while (input == null) {
            input = prompt('Please enter rock, paper or scissors');
        }
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
   return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choicec == 'rock') || 
        (choiceP === 'scissors' && choiceC =='paper') 
      )  {
        return 'player';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item =='Tie').length;
    console.log('Results:')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice,computerChoice,winner,round) {
    console.log('Round:', round)
    console.log('Player chose:', playerChoice)
    console.log('Computer chose:', computerChoice)
    console.log(winner,'Won the round')
    console.log('---------------')
}

game();