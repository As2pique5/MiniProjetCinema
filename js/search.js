import { searchMovies } from "./api.js";

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const loadMoreButton = document.getElementById("load-more");

let currentPage = 1;
let currentQuery = "";

// Fonction pour afficher un message d'erreur
function displayError(message) {
    searchResults.innerHTML = `<p style="color: red; font-weight: bold;">${message}</p>`;
}

// Fonction pour afficher/masquer le loader
function showLoader() {
    searchResults.innerHTML = `
        <div class="loader"></div>
    `;
}

function hideLoader() {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
}

// Fonction pour afficher les résultats de recherche
async function displaySearchResults(query, page = 1) {
    if (!query) return;

    showLoader();  // Affiche le loader

    try {
        const movies = await searchMovies(query, page);
        hideLoader();  // Cache le loader après chargement

        if (movies.length === 0) {
            displayError("Aucun film trouvé !");
        } else {
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
                searchResults.appendChild(movieDiv);
            });
        }
    } catch (error) {
        hideLoader();
        displayError("Une erreur s'est produite. Veuillez réessayer.");
    }
}

// Écouteur pour la recherche en temps réel
searchInput.addEventListener("input", () => {
    currentQuery = searchInput.value.trim();
    currentPage = 1;

    if (currentQuery.length > 2) {
        displaySearchResults(currentQuery, currentPage);
    } else {
        searchResults.innerHTML = "";  // Nettoyer les résultats si la recherche est vide
    }
});

// Bouton pour charger plus de résultats
loadMoreButton.addEventListener("click", () => {
    if (currentQuery.length > 2) {
        currentPage++;
        displaySearchResults(currentQuery, currentPage);
    }
});
