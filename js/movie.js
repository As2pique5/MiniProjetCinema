import { getMovieDetails } from "./api.js";

// Fonction pour extraire l'ID du film depuis l'URL
function getMovieIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Fonction pour afficher les détails du film
async function displayMovieDetails() {
    const movieId = getMovieIdFromURL();
    if (!movieId) {
        alert("Aucun film sélectionné !");
        return;
    }

    const movie = await getMovieDetails(movieId);

    if (movie) {
        document.getElementById("movie-title").textContent = movie.Title;
        document.getElementById("movie-poster").src = movie.Poster !== "N/A" ? movie.Poster : 'assets/images/placeholder.png';
        document.getElementById("movie-plot").textContent = movie.Plot;
        document.getElementById("movie-genre").textContent = movie.Genre;
        document.getElementById("movie-actors").textContent = movie.Actors;
        document.getElementById("movie-rating").textContent = movie.imdbRating + "/10";
        
        // Formatage de la date en français
        const dvdDate = movie.DVD !== "N/A" ? new Date(movie.DVD).toLocaleDateString("fr-FR") : "Non disponible";
        document.getElementById("movie-dvd").textContent = dvdDate;
    } else {
        alert("Impossible de charger les détails du film.");
    }
}

// Chargement des détails au lancement de la page
displayMovieDetails();
