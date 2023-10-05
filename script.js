'use strict';
// some variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// game functions
// f1
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// f2
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// f3
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// f4
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
// f5
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// f6
const displayHead = function (head) {
  document.querySelector('.head').textContent = head;
};
// f7
function logic() {
  const guess = Number(document.querySelector('.guess').value);
  // when there no input
  if (!guess) {
    displayMessage('⚠️No Number⚠️');
    // when player win
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct number🎉');
    displayNumber(secretNumber);
    bodyColor('#60b347');
    numberWidth('30rem');
    displayHead('Winner Winner');
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high📈' : '📉Too low📉');
      score--;
      displayScore(score);
    } else {
      score = 0;
      displayMessage('😥You lost😥');
      displayScore(score);
      displayHead('You lost ... try again');
      bodyColor('#ff0000');
    }
  }
}
// f8
function reset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  bodyColor('#222');
  numberWidth('15rem');
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayHead('Guess My Number!');
}

// buttons activator
document.querySelector('.check').addEventListener('click', logic);
document.querySelector('.again').addEventListener('click', reset);
