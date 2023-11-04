import { api_key } from "./API_KEY";

export const upcoming_series = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=pt-BR`,
  );
  const data = await response.json();
  return data.results;
};
