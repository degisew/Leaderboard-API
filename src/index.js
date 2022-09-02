import MyGames from './JS modules/addGame.js';
import './SCSS/style.scss';

const form = document.getElementById('form');
const refreshBtn = document.getElementById('refresh-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const playerName = document.getElementById('player-name').value;
  const playerScore = document.getElementById('player-score').value;
  await MyGames.addScore({
    name: playerName,
    score: playerScore,
  });
});

refreshBtn.addEventListener('click', () => {
  MyGames.freshData();
});