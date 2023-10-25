import { useEffect, useState } from "react";
import {
  InfoFilmeContainer,
  MidiaFilmeContainer,
  MidiaFilmeContainerNoTrailer,
} from "../DescricaoFilmeStyle/styles";
import { useParams } from "react-router-dom";
import {
  paramsBase,
  post_path,
  urlMovieSearchById,
} from "../../variables/variables";
import { api_key } from "../../api/API_KEY";

export function DescricaoFilmeSct() {
  const [movie, setMovie] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieCreators, setMovieCreators] = useState([]);
  const [dublagemDisponiveis, setDublagemDisponiveis] = useState([]);
  const [movieIdTrailer, setMovieIdTrailer] = useState();
  const { idMovie } = useParams();
  useEffect(() => {
    const requestApiMovieId = async () => {
      const response = await fetch(
        `${urlMovieSearchById}/${idMovie}${paramsBase}`,
      );
      const data = await response.json();
      setMovie(data);
      setMovieGenres(data.genres);
      setMovieCreators(data.production_companies);
      setDublagemDisponiveis(data.spoken_languages);
    };
    requestApiMovieId();
  }, [movie, idMovie]);

  useEffect(() => {
    const requestIdTrailerMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${api_key}&language=pt-BR`,
      );
      const data = await response.json();
        setMovieIdTrailer(data.results[0].key);
    };
    if (dublagemDisponiveis !== null) requestIdTrailerMovie();
  }, [movie, idMovie, dublagemDisponiveis]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InfoFilmeContainer>
        <section>
          <img
            src={`${post_path}${movie.backdrop_path}`}
            alt="poster oficial do filme"
          />

          <h2>{movie.title}</h2>
        </section>

        <section>
          <p>{movie.overview}</p>

          <div className="info-filme">
            <p>
              {movie.adult
                ? "Classificação adulta"
                : "Classificação não adulta"}{" "}
              | {movie.release_date}
            </p>

            <p className="generos-filme">
              {movieGenres.map((genre, index) => (
                <span key={index}>
                  {index !== movieGenres.length - 1
                    ? `${genre.name}|`
                    : `${genre.name}`}
                </span>
              ))}

              <p className="imdb">
                <span>IMBD </span>
                <span>{movie.vote_average}</span>
              </p>
            </p>
          </div>

          <div className="info-producao">
            <p>
              Companias de produção:
              {movieCreators.map((creator, index) => (
                <span key={index}>
                  {index !== movieCreators.length - 1
                    ? `${creator.name},`
                    : `${creator.name}`}
                </span>
              ))}
            </p>

            <p>
              Contagem de votos: <span>{movie.vote_count}</span>
            </p>

            <p>
              Linguagens disponíveis:
              {dublagemDisponiveis.map((dub, index) => (
                <span key={index}>
                  {index !== dublagemDisponiveis.length - 1
                    ? `${dub.name},`
                    : `${dub.name}`}
                </span>
              ))}
            </p>

            <p>
              Tempo de duração:
              <span>{movie.runtime} minutos</span>
            </p>
          </div>
        </section>
      </InfoFilmeContainer>
      {movieIdTrailer !== undefined ? (
        <MidiaFilmeContainer>
          <iframe
            className="trailer"
            src={`https://www.youtube.com/embed/${movieIdTrailer}?si=JyBwrEzapF-ldlbW`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </MidiaFilmeContainer>
      ) : (
        <MidiaFilmeContainerNoTrailer>
          <div className="noText">
            <h1> O filme não possui trailer disponível </h1>
          </div>
        </MidiaFilmeContainerNoTrailer>
      )}
    </>
  );
}
