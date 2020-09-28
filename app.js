//Variables
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerScore = document.getElementById('player');
let computerScore = document.getElementById('computer');
let resultMsg = document.getElementById('resultMsg');

//Objects for choices and scores
let choice = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

let score = {
    player: 0,
    computer: 0
}

//Functions

//Generates random integer
function randomInt() {
    let randInt = Math.floor(Math.random()*3);
    return randInt;
}

//Decides who is the winner according to player and computer choice
function decideWinner(player, computer) {
    let outcome;
    if(player === 'rock') {
        if(computer === 'scissors') outcome = 'won';
        else if(computer === 'paper') outcome = 'lost';
        else outcome = 'draw';
    }
    else if(player === 'paper') {
        if(computer === 'rock') outcome = 'won';
        else if(computer === 'scissors') outcome = 'lost';
        else outcome = 'draw';
    }
    else if(player === 'scissors') {
        if(computer === 'paper') outcome = 'won';
        else if(computer === 'rock') outcome = 'lost';
        else outcome = 'draw';
    }
    
    outputResult(outcome);
}

//Outputs the result of the turn
function outputResult(outcome) {
    if(outcome === 'won'){
        score['player']++;
        resultMsg.innerHTML = '<h3 class="text-success">You win!</h3>';

    }
    else if(outcome === 'lost'){ 
        score['computer']++;
        resultMsg.innerHTML = '<h3 class="text-danger">You lose!</h3>';
    }
    else {
        resultMsg.innerHTML = '<h3 class="text-warning">It\'s a draw!</h3>';
    }
}

//Shows the choice of the player and the computer
function showChoice(player, computer) {
    let playerSpan = document.getElementById('player-choice');
    let computerSpan = document.getElementById('computer-choice');

    playerSpan.innerText = player.charAt(0).toUpperCase() + player.slice(1);
    computerSpan.innerText = computer.charAt(0).toUpperCase() + computer.slice(1);
}


$(document).ready(() => {
    $('.img').click((e) => {
        let playerChoice = e.target.id;
        let computerChoice = choice[randomInt()];

        showChoice(playerChoice, computerChoice)
        decideWinner(playerChoice, computerChoice);

        playerScore.innerText = score['player'];
        computerScore.innerText = score['computer'];

    });
});
