const API_LINK = 'https://api.themoviedb.org/3/movie/550?api_key=fef390b999cfcff68feb5b573745f88a'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query='

const main = document.getElementById("section")
const form = document.getElementById("form")
const searchBox = document.getElementById("query")

getMovies(API_LINK);

function getMovies(url)
{
    fetch(url)
    .then(res => res.json())
    .then(function(data)
    {
        console.log(data.results);

        data.results.forEach(element => 
        {
            const rowDiv = document.createElement('div');
            rowDiv.setAttribute('class', 'row');
            rowDiv.setAttribute('style', 'padding: 10px');

            const columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'column');

            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', 'card');

            const imageContainerDiv = document.createElement('div');
            imageContainerDiv.setAttribute('class', 'image-container');

            const imageDiv = document.createElement('div');
            imageDiv.setAttribute('class', 'thumbnail');
            imageDiv.setAttribute('draggable', 'false');
            imageDiv.setAttribute('id', 'movie_image');

            const titleDiv = document.createElement('h3');
            titleDiv.setAttribute('id', 'movie_title');

            titleDiv.innerText = "${element.title}";
            imageDiv.src = IMAGE_PATH + element.poster_path;

            imageContainerDiv.appendChild(imageDiv);
            cardDiv.append(imageContainerDiv, titleDiv);
            columnDiv.appendChild(cardDiv);
            rowDiv.appendChild(columnDiv);
            
            main.appendChild(rowDiv);
        });
    });
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
