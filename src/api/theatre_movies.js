import { api_key } from "./API_KEY";

export const theatre_movies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=pt-BR`,
  );
  const data = await response.json();
  return data.results;
};
