'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let currentScoreP1 = Number(document.querySelector('#current--0').textContent);
let currentScoreP2 = Number(document.querySelector('#current--1').textContent);
let activePlayer;

let maxScore = Number(prompt('Masukan angka (max score) untuk menentukan kemenangan..'));

/* Default */
btnRoll.disabled = true;
btnHold.disabled = true;

/* ----------------------------------------------- */
/* --------------Start The Game------------------ */
btnNewGame.addEventListener('click', function () {
  btnRoll.disabled = false;
  btnHold.disabled = false;
  activePlayer = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  if (document.querySelector(`#name--0`).textContent === 'WINNER!🎉') {
    document.querySelector(`#name--0`).textContent = 'Player 1';
  } else if (document.querySelector(`#name--1`).textContent === 'WINNER!🎉') {
    document.querySelector(`#name--1`).textContent = 'Player 2';
  }
  if (document.querySelector('.player--1').classList.contains('player--active')) {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  if (document.querySelector(`.player--0`).classList.contains('player--winner')) {
    document.querySelector(`.player--0`).classList.remove('player--winner')
  } else if (document.querySelector(`.player--1`).classList.contains('player--winner')) {
    document.querySelector(`.player--1`).classList.remove('player--winner')
  }
})


/* ----------------------------------------------- */
/* --------------Roll The Dice------------------- */
const updateCurrentScore = function (score,player) {
  if (player === 0) {
    currentScoreP1 += score;
    document.querySelector('#current--0').textContent = currentScoreP1;
  } else if (player === 1) {
    currentScoreP2 += score;
    document.querySelector('#current--1').textContent = currentScoreP2;
  }
}

const updateScore = function (player) {
  if (player === 0) {
    let win;
    let totalScore = Number(document.querySelector('#score--0').textContent);
    totalScore += currentScoreP1
    document.querySelector('#score--0').textContent = totalScore;
    currentScoreP1 = 0;
    document.querySelector('#current--0').textContent = currentScoreP1;
    totalScore >= maxScore ? win = true : win = false ;
    return win;
  } else if (player === 1) {
    let win;
    let totalScore = Number(document.querySelector('#score--1').textContent);
    totalScore += currentScoreP2
    document.querySelector('#score--1').textContent = totalScore;
    currentScoreP2 = 0;
    document.querySelector('#current--1').textContent = currentScoreP2;
    totalScore >= maxScore ? win = true : win = false ;
    return win;
  }
}

const changePlayer = function (player) {
  if (player === 0) {
    currentScoreP1 = 0;
    document.querySelector('#current--0').textContent = currentScoreP1;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    return 1;
  } else if (player === 1) {
    currentScoreP2 = 0;
    document.querySelector('#current--1').textContent = currentScoreP2;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    return 0;
  }
}

btnHold.addEventListener('click', function () {

  /* Check Winner */
  if (updateScore(activePlayer)) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER!🎉';
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    activePlayer = changePlayer(activePlayer);
    console.log(activePlayer);
  }
  // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
});

btnRoll.addEventListener('click', function () {
  let score = Math.trunc(Math.random() * 6) + 1
  dice.src = `dice-${score}.png`;
  if (score !== 1 && activePlayer !== null) {
    updateCurrentScore(score, activePlayer);
  } else if (activePlayer !== null) {
    activePlayer = changePlayer(activePlayer);
    console.log(activePlayer);
  } else {
    alert('Please Click Start Button...');
  }
});
