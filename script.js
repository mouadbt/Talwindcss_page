let i=0
const section = document.querySelector('.grid-section');
// const emptyDivs=document.querySelectorAll(".null")

// Fetch anime data from the API
fetch('https://ghibliapi.vercel.app/films')
  .then(response => response.json())
  .then(data => {
    const animes = data;
    
    animes.forEach(anime => {
        section.innerHTML+=`
        
            <a href="anime.html?id=${anime.id}" class="anime relative rounded-xl h-72 sm:h-96 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img src="${anime.image}" alt=" " class="rounded-xl absolute h-full object-cover w-full left-0 top-0">
                <h2 class="text-white absolute object-cover w-full left-0 bottom-0 z-20 text-xl p-1">${anime.title}</h2>
            </a>
        `
    });
    // emptyDivs.forEach(emptyD => {
    //   emptyD.style.display = 'none';
    //   emptyD.innerText="gg"
    //   console.log(emptyD)
    // });
  })
  .catch(error => {
    console.log('Error:', error);
  });
