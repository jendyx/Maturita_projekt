const apiBaseUrl = "https://api.themoviedb.org/3";
const apikey = "59af4c678e0561258b55208d0a47924e";
const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const moviesGrid = document.getElementById("movies-grid");
const tvShowsGrid = document.getElementById("tvshows-grid");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

async function fetchMoviesNowPlaying() {
    const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apikey}`);
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    
    displayMovies(movies);
    
}

async function searchMovies(query) {
    const response = await fetch(`${apiBaseUrl}/search/movie?api_key=${apikey}&query=${query}`);
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    
    displayMovies(movies);
    
}

function displayMovies(movies) {
    moviesGrid.innerHTML = movies
        .map(movie => 
            `<div class="movie-card">
            <img src="${imageBaseUrl}${movie.poster_path}"/>
            <p>*${movie.vote_average}</p>
            <h1>${movie.title}</h1>
            </div>`
        )
        .join("");
}


async function fetchTvShowsAiringToday() {
    const response = await fetch(`${apiBaseUrl}/tv/airing_today?api_key=${apikey}`);
    const jsonResponse = await response.json();
    const tvShows = jsonResponse.results;
    
    displayTvShows(tvShows);
}

async function searchTvShows(query) {
    const response = await fetch(`${apiBaseUrl}/search/tv?api_key=${apikey}&query=${query}`);
    const jsonResponse = await response.json();
    const tvShows = jsonResponse.results;
    
    displayTvShows(tvShows);
}

function displayTvShows(tvShows) {
    tvShowsGrid.innerHTML = tvShows
        .map(show => 
            `<div class="tvshow-card">
            <img src="${imageBaseUrl}${show.poster_path}"/>
            <p>*${show.vote_average}</p>
            <h1>${show.name}</h1>
            </div>`
        )
        .join("");
}

function handleSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = searchInput.value;
    const movies = searchMovies(searchQuery);
    const tvShows =  searchTvShows(searchQuery);
}

searchForm.addEventListener("submit", handleSearchFormSubmit);
fetchMoviesNowPlaying();
fetchTvShowsAiringToday();