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

// Fonction pour afficher les résultats
async function displaySearchResults(query, page = 1) {
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
                    <img src="${movie.Poster !== "N/A" ? movie.Poster : 'assets/images/placeholder.png'}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <a href="movie.html?id=${movie.imdbID}">En savoir plus</a>
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

// Intégration du Loader

function showLoader() {
    const loader = document.createElement("div");
    loader.className = "loader";
    searchResults.appendChild(loader);
}

function hideLoader() {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
}

async function displaySearchResults(query, page = 1) {
    searchResults.innerHTML = "";
    showLoader();

    try {
        const movies = await searchMovies(query, page);
        hideLoader();

        if (movies.length === 0) {
            searchResults.innerHTML = "<p>Aucun film trouvé.</p>";
        } else {
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
    } catch (error) {
        hideLoader();
        searchResults.innerHTML = "<p>Une erreur s'est produite.</p>";
    }
}

const loader = document.getElementById("loader");

// Afficher le loader
function showLoader() {
    loader.style.display = "block";
}

// Masquer le loader
function hideLoader() {
    loader.style.display = "none";
}
