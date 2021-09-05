'use strict';

const message = document.querySelector('.message');
message.textContent = 'Guess the number..';
console.log(message.textContent);
// Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const numberBox = document.querySelector('.number');
const check = document.querySelector('.btn.check');
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
const btnAgain = document.querySelector('.btn.again');

check.addEventListener('click', function() {
  const guessBox = Number(document.querySelector('.guess').value);
  // console.log('Check button is clicked..');
  if (score > 1) {
    if (!guessBox) {
      message.textContent = '⛔No Number!';
    } else if (guessBox === secretNumber) {
      numberBox.textContent = guessBox;
      message.textContent = 'Correct!!🎊🎉';

      // highScore += score;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }

      document.querySelector('body').classList.add('bg-green');
      numberBox.classList.add('stretch');
      check.disabled = true;
    } else if (guessBox > secretNumber) {
      message.textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guessBox < secretNumber) {
      message.textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    message.textContent = 'You Lost the Game!💥';
    document.querySelector('.score').textContent = 0;
  }
});

btnAgain.addEventListener('click', function() {
  message.textContent = 'Guess the number..';

  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  
  numberBox.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  document.querySelector('body').classList.remove('bg-green');
  numberBox.classList.remove('stretch');

  check.disabled = false;
})

console.log(numberBox.textContent);