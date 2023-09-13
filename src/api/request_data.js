import { api_key } from "./API_KEY";

export const data = async () => {
  // const numeroAleatorio = Math.floor(Math.random() * 20);
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=pt-BR`,
  );
  const responseData = await response.json();
  const result = responseData.results[0];
  return result;  
};
