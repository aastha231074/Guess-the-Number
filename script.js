'use strict';

document.querySelector('.score');

// define a random number between 1-20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// decrease the score at each wrong guess
// let score = Number(document.querySelector('.score').textContent);
let score = 20;
// build the check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
});
