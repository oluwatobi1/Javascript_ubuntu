var activePlayer, scores, currentScore, oldScore, diceNumber;

console.log("dice");

var diceImage = document.querySelector('.dice');
init();
diceImage.style.display = 'none';

document.querySelector('#roll-dice-btn').addEventListener('click', function() {
    oldScore = diceNumber;
    diceNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.style.display = 'block';
    diceImage.src = 'dice-' + diceNumber + '.png';
    currentScore += diceNumber
    console.log("dice", oldScore, diceNumber);

    if (diceNumber === 1) {
        loseScore();
        switchPlayer();
    }
    if (oldScore === 6 && diceNumber === 6) {
        score[activePlayer] = 0
        document.querySelector('#score--' + activePlayer).textContent = score[activePlayer];
        loseScore();
    };
    document.querySelector('#current--' + activePlayer).textContent = currentScore;
})

document.querySelector('#hold-btn').addEventListener('click', function() {
    if (currentScore > 0) {
        score[activePlayer] = score[activePlayer] + currentScore
        document.querySelector('#score--' + activePlayer).textContent = score[activePlayer];
        currentScore = 0;
        document.querySelector('#current--' + activePlayer).textContent = currentScore;
        if (score[activePlayer] > 100) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner'
            document.querySelector('#roll-dice-btn').style.display = 'none'
            document.querySelector('#hold-btn').style.display = 'none'
        }
        document.getElementsByClassName('player player--' + activePlayer + " player--active")[0].className = "player player--" + activePlayer
        switchPlayer();
    }

})

document.querySelector('#new-game-btn').addEventListener('click', init);

function loseScore() {
    currentScore = 0
    document.querySelector('#current--' + activePlayer).textContent = currentScore;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

}


function init() {
    score = [0, 0]
    activePlayer = 0;
    currentScore = 0;
    document.querySelector('#roll-dice-btn').style.display = 'block';
    document.querySelector('#hold-btn').style.display = 'block';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#score--0').textContent = 0;
    diceImage.style.display = 'none';
};

function switchPlayer() {
    activePlayer = Math.abs(activePlayer - 1);
    document.getElementsByClassName('player player--' + activePlayer)[0].className = "player player--" + activePlayer + " player--active";
};