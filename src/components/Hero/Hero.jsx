import { useCallback, useEffect, useState } from "react";
import { data } from "../../api/request_data";
import { post_path } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { Play } from "phosphor-react";
import { movie_data } from "../../api/movie_details";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function Hero() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const nextMovie = useCallback(() => {
    if (!isPaused) {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
      );
    }
  }, [isPaused, movies]);

  useEffect(() => {
    const timer = setInterval(nextMovie, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, nextMovie]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <S.ContainerHero
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {isLoading ? (
          <Skeleton className="HeroMainSkeleton" />
        ) : (
          movies.map((movie, index) => (
            <S.Hero
              key={index}
              style={{
                backgroundImage:
                  `url('${post_path}${movie.backdrop_path}')` || <Skeleton />,
                display: index === currentMovieIndex ? "flex" : "none",
              }}
            >
              <S.HeroGradientOverlay />
              <S.DescFilme>
                <h1>{movie.title || <Skeleton />}</h1>
                <p>{movie.overview || <Skeleton count={4} />}</p>
                <h3>
                  <S.ImdbLogo>IMBD </S.ImdbLogo>
                  {movie.vote_average.toFixed(1)} | {movie.release_date} |{" "}
                  {runtimes[index] ? `${runtimes[index]} min` : "Carregando..."}
                </h3>
              </S.DescFilme>
              <S.NavBarFilme>
                <button>
                  <NavLink to={`/movie/${movie.id}`}>
                    <Play size={32} color="#fcfcfc" />
                  </NavLink>
                </button>
                {/* <button>
              <Plus size={32} color="#fcfcfc" weight="bold" />
            </button> */}
              </S.NavBarFilme>
            </S.Hero>
          ))
        )}
      </S.ContainerHero>
    </SkeletonTheme>
  );
}
