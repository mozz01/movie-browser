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
    .then(res => res.jason())
    .then(function(data)
    {
        console.log(data.results);

        data.results.forEach(element => 
        {
            const rowDiv = document.createElement('div');
            const columnDiv = document.createElement('div');
            const cardDiv = document.createElement('div');
            const imageDiv = document.createElement('div');
            const titleDiv = document.createElement('h3');
            const imageContainerDiv = document.createElement('div');

            titleDiv.innerText = "${element.title}";
            imageDiv.src = IMAGE_PATH + element.poster_path;

        });

    });
}
