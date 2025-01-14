import { getTrendingMovies } from "./api.js";

const moviesContainer = document.getElementById("movies-container");
const loadMoreButton = document.getElementById("load-more");

let currentPage = 1;

// Fonction pour afficher les films
async function displayTrendingMovies() {
    const movies = await getTrendingMovies("2024", currentPage);
    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'assets/images/placeholder.png'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <a href="movie.html?id=${movie.imdbID}">En savoir plus</a>
        `;
        moviesContainer.appendChild(movieDiv);
    });
}

// Charger plus de films au clic
loadMoreButton.addEventListener("click", () => {
    currentPage++;
    displayTrendingMovies();
});

// Chargement initial
displayTrendingMovies();
