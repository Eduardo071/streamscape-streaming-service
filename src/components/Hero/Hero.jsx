import { useEffect, useState } from "react";
import { data } from "../../api/request_data";
import { post_path } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { Play, Plus, Star } from "phosphor-react";
import { movie_data } from "../../api/movie_details";
import { NavLink } from "react-router-dom";
import "swiper/css/bundle";

export function Hero() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const post_data = async () => {
      const arrayData = await data();
      setMovies(arrayData);

      const movieIds = arrayData.map((movie) => movie.id);
      setMovieId(movieIds);
    };
    post_data();
  }, []);

  useEffect(() => {
    if (movieId.length > 0) {
      const fetchRuntimes = async () => {
        await Promise.all(
          movieId.map(async (movieId) => {
            const movieData = await movie_data(movieId);
            setRuntimes((prevRuntimes) => [...prevRuntimes, movieData.runtime]);
          }),
        );
      };

      fetchRuntimes();
    }
  }, [movieId, movies.length]);

  const nextMovie = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextMovie, 8000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {movies.map((movie, index) => (
        <S.Hero
          key={index}
          style={{
            backgroundImage: `url('${post_path}${movie.backdrop_path}')`,
            display: index === currentMovieIndex ? "flex" : "none",
          }}
        >
          <S.HeroGradientOverlay />
          <S.DescFilme>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h3>
              <Star size={32} color="#fcfcfc" weight="fill" />
              {movie.vote_average.toFixed(1)} | {movie.release_date} |{" "}
              {runtimes[index] ? `${runtimes[index]} min` : "Carregando..."}
            </h3>
          </S.DescFilme>
          <S.NavBarFilme>
            <button>
              <NavLink to="/titulo-do-filme">
                <Play size={32} color="#fcfcfc" />
              </NavLink>
            </button>
            <button>
              <Plus size={32} color="#fcfcfc" weight="bold" />
            </button>
          </S.NavBarFilme>
        </S.Hero>
      ))}
    </div>
  );
}
