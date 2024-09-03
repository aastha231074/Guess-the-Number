'use strict';
// define a random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// decrease the score at each wrong guess
// let score = Number(document.querySelector('.score').textContent);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// build the check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No Number');
    // document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🥳 Correct Number!');
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🫠 You lost the game');
      // document.querySelector('.message').textContent = '🫠 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = '📈 Too High!';
  //   score -= 1;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = '📉 Too Low!';
  //   score -= 1;
  //   document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing.......');
  // document.querySelector('.message').textContent = 'Start Guessing.......';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
