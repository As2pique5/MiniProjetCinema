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
            <div class="movie-card" onclick="window.location.href='movie.html?id=${movie.imdbID}'">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : 'assets/images/placeholder.png'}" alt="${movie.Title}">
                <div class="overlay">
                    <p>En savoir plus</p>
                </div>
                <h3>${movie.Title}</h3>
            </div>

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

const loader = document.getElementById("loader");

// Afficher le loader
function showLoader() {
    loader.style.display = "block";
}

// Masquer le loader
function hideLoader() {
    loader.style.display = "none";
}

