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

