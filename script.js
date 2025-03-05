const apiBaseUrl = "https://api.themoviedb.org/3";
const apikey = "59af4c678e0561258b55208d0a47924e";
const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const moviesGrid = document.getElementById("movies-grid");

async function fetchMoviesNowPlaying() {
    const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apikey}`);
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    displayMovies(movies);
    
}

function displayMovies(movies) {
    moviesGrid.innerHTML = movies
        .map(movie => `<img src="${imageBaseUrl}${movie.poster_path}"/>
            <p>*${movie.vote_average}</p>
            <h1>${movie.title}</h1>`
        )
        .join("");
}

fetchMoviesNowPlaying();