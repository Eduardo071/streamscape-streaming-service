import { api_key } from "./API_KEY";

export const movie_data = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`,
  );
  const responseData = await response.json().then(response => {
    return response
  });
  return responseData;
};