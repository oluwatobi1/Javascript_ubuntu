var diceNumber, activePlayer, scores, currentScore

scores = [0, 0]
activePlayer = 0;
currentScore = 0;

diceNumber = Math.floor(Math.random() * 6) + 1
document.querySelector('#current--' + activePlayer).textContent = diceNumber

var diceImage = document.querySelector('.dice')

diceImage.style.display = 'none'