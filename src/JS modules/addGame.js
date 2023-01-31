class MyGames {
 static url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XeCkDX2S3rUYdY7fb0Bh/scores/';

  static addScore = async (formData = {}) => {
    const response = await fetch(this.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  }

  static freshData = async () => {
    const displayDiv = document.querySelector('.display-score');
    displayDiv.innerHTML = "<p id='loading'>Loading...</p>";
    const response = await fetch(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await response.json();
    const parsedData = parsed.result; // result key is retuned from API not created by Me.
    displayDiv.innerHTML = '';
    parsedData.forEach((each) => {
      displayDiv.innerHTML += `
      <li class="list-items">${each.user}: ${' '}${each.score}</li>
      `;
    });
  }
}

export default MyGames;