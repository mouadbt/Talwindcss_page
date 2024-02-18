// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Read the value of the 'id' parameter
const animeId = urlParams.get('id');

// Use the animeId as needed
console.log(animeId);

let i=0
const section = document.querySelector('.hero');

// Fetch anime data from the API
fetch(`https://ghibliapi.vercel.app/films/${animeId}`)
  .then(response => response.json())
  .then(data => {
    const anime = data;
    section.style.background=`url(${anime.movie_banner})`
    section.querySelector('img').src=anime.image
    section.querySelector('h1').innerText=anime.title
    section.querySelector('.p').innerText=anime.producer
    section.querySelector('.d').innerText=anime.director
    section.querySelector('.rd').innerText=anime.release_date
    section.querySelector('.ds').innerText=anime.description
    section.querySelector('.ot').innerText=anime.original_title
        console.log(anime)
  })
  .catch(error => {
    console.log('Error:', error);
  });
