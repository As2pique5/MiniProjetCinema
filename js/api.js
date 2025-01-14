const API_KEY = "f4c57c5e";  // clé OMDb
const BASE_URL = "https://www.omdbapi.com/";

// Fonction pour récupérer les films tendances (ex: films de 2024)
export async function getTrendingMovies(year = "2024", page = 1) {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie&y=${year}&page=${page}`);
        const data = await response.json();
        if (data.Response === "True") {
            return data.Search;
        } else {
            console.error(data.Error);
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        return [];
    }
}

// Fonction de recherche de films avec gestion d'erreurs
export async function searchMovies(query, page = 1) {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
        const data = await response.json();
        if (data.Response === "True") {
            return data.Search;
        } else {
            throw new Error(data.Error);
        }
    } catch (error) {
        console.error("Erreur de recherche :", error);
        throw error;  // Propager l'erreur
    }
}


// Fonction pour récupérer les détails d'un film
export async function getMovieDetails(id) {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        } else {
            console.warn(data.Error);
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des détails du film :", error);
        return null;
    }
}