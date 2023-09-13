import { api_key } from "./API_KEY";

export const data = async () => {
  const numeroAleatorio = Math.floor(Math.random() * 20);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
  );
  const responseData = await response.json().then(response => {
    return response.results[numeroAleatorio]
  });
  console.log(responseData);
  return responseData;
};