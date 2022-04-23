const jokeEl = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');

const config = {
  headers: {
    Accept: 'application/json',
  },
};
/*
const generateJoke = () => {
  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.textContent = data.joke;
    });
};
generateJoke();

jokeBtn.addEventListener('click', generateJoke);
*/

const generateJoke = async () => {
  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.textContent = data.joke;
};
generateJoke();

jokeBtn.addEventListener('click', generateJoke);
