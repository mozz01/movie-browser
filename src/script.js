const API_LINK = 'https://api.themoviedb.org/3/search/movie?query=smile&include_adult=false&language=en-US&page=1'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query='

const main = document.getElementById("section")
const form = document.getElementById("form")
const searchBox = document.getElementById("query")

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWYzOTBiOTk5Y2ZjZmY2OGZlYjViNTczNzQ1Zjg4YSIsInN1YiI6IjY1MDI4Y2I3NmEyMjI3MDBhYmE5ODI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rH64s0cBvk3L_ZfJW7p0BcmunY3g8WjImGv41N6tPDs'
    }
  };

getMovies(API_LINK);

function getMovies(url)
{
    fetch(url, options)
    .then(response => response.json())
    .then(function(data)
    {
        console.log(data.results);

        data.results.forEach(element => 
        {
            const rowDiv = document.createElement('div');
            rowDiv.setAttribute('class', 'row');

            const columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'column');

            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', 'card');

            const imageContainerDiv = document.createElement('div');
            imageContainerDiv.setAttribute('class', 'image-container');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('draggable', 'false');
            image.setAttribute('id', 'movie_image');

            const titleDiv = document.createElement('h3');
            titleDiv.setAttribute('id', 'movie_title');

            titleDiv.innerText = `${element.title}`;
            if(element.poster_path)
            {
                image.setAttribute('src', IMAGE_PATH + element.poster_path);
            }
            else
            {
                image.setAttribute('src', 'images/not_found.png');
            }

            imageContainerDiv.appendChild(image);
            cardDiv.append(imageContainerDiv, titleDiv);
            columnDiv.appendChild(cardDiv);
            rowDiv.appendChild(columnDiv);
            
            main.appendChild(rowDiv);
        })
    })
    .catch(err => console.error(err));
}

form.addEventListener("submit", (e) => 
{
    e.preventDefault();
    main.innerHTML = '';

    const searchPhrase = searchBox.value;

    if(searchPhrase)
    {
        getMovies(SEARCH_API + searchPhrase);
        searchBox.value = "";
    }

});
