import { api_key } from "./API_KEY";

export const data = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=pt-BR`,
  );
  const responseData = await response.json();
  const result = responseData.results.slice(0, 7);
  return result;
};
