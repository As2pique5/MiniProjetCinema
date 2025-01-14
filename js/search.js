import { searchMovies } from "./api.js";

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const loadMoreButton = document.getElementById("load-more");

let currentPage = 1;
let currentQuery = "";

// Fonction pour afficher les résultats de recherche
async function displaySearchResults(query, page = 1) {
    const movies = await searchMovies(query, page);
    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'assets/images/placeholder.png'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <a href="movie.html?id=${movie.imdbID}">En savoir plus</a>
        `;
        searchResults.appendChild(movieDiv);
    });
}

// Écouteur pour la recherche en temps réel
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    searchResults.innerHTML = "";  // Réinitialise les résultats
    currentPage = 1;
    currentQuery = query;

    if (query.length > 2) {
        displaySearchResults(query, currentPage);
    }
});

// Bouton pour charger plus de résultats
loadMoreButton.addEventListener("click", () => {
    if (currentQuery.length > 2) {
        currentPage++;
        displaySearchResults(currentQuery, currentPage);
    }
});
