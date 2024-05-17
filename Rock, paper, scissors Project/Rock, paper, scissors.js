let score = JSON.parse(localStorage.getItem('score')) || /*Ternary : Default operator*/  {
    Wins:0,
    Losses:0,
    Ties: 0
};


scoreUpdate();

/*  document.querySelector('.js-score').innerHTML = ` 
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`; */

//if statement can be commented but does not matter!
if (!score /*score === null*/) {
score = {
    Wins:0,
    Losses:0,
    Ties: 0
}
}


let autoPlaying = false;
let intervalId;
function autoPlay() {
    if (!autoPlaying) {
    intervalId = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000)
    autoPlaying = true;
    document.querySelector(`.auto-play-button`).innerHTML = 'Stop Play';
} else {
    clearInterval(intervalId);
    autoPlaying = false;
    document.querySelector(`.auto-play-button`).innerHTML = 'Auto Play';
}
}

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';


if (playerMove === 'Scissors') {
if (computerMove === 'Rock'){
    result = 'You loose.';
} else if (computerMove === 'Paper'){
    result = 'You win.';
} else if (computerMove === 'Scissors'){
    result = 'Tie.';
}


} else if (playerMove === 'Rock'){
if (computerMove === 'Rock'){
    result = 'Tie.';
} else if (computerMove === 'Paper'){
    result = 'You loose.';
} else if (computerMove === 'Scissors'){
    result = 'You win.';
}


} else if (playerMove === 'Paper') {
if (computerMove === 'Rock'){
    result = 'You win.';
} else if (computerMove === 'Paper'){
    result = 'Tie.';
} else if (computerMove === 'Scissors'){
    result = 'You loose.';
}
}

if (result === 'You win.') {
score.Wins += 1;
} else if (result === 'You loose.') {
score.Losses += 1;
} else if (result === 'Tie.') {
score.Ties += 1;
}

scoreUpdate();
document.querySelector('.js-result').innerHTML = `${result}`;
document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;

/* localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.js-score').innerHTML = ` 
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`; */
/* 
alert(`You picked ${playerMove}, computer picked ${computerMove}. ${result}. \n Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`); */
}


function scoreUpdate() {
localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.js-score').innerHTML = ` 
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}


function pickComputerMove() {
let computerMove = '';
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper';
} else if (randomNumber >= 2/3 && randomNumber < 3/3){
computerMove = 'Scissors';
}
return computerMove;
}

  