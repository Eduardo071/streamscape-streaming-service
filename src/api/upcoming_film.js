import { api_key } from "./API_KEY"

export const upcoming = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=pt-BR`)
    const data = await response.json()
    console.log(data.results)
    return data.results
}