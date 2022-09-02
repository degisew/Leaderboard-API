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

  static displayScore = async () => {

  };

  static freshData = async () => {
    await fetch(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  }
}

export default MyGames;