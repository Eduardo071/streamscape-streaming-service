import { useEffect, useState } from "react";
import {
  AvaliacaoContainer,
  InfoFilmeContainer,
  MidiaFilmeContainer,
} from "../DescricaoFilmeStyle/styles";
import { FilmeMidia } from "../FilmeMidia";
import { BookmarkSimple, Star } from "phosphor-react";
import { useParams } from "react-router-dom";
import {
  paramsBase,
  post_path,
  urlMovieSearchById,
} from "../../variables/variables";

export function DescricaoFilmeSct() {
  const [movie, setMovie] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieCreators, setMovieCreators] = useState([]);
  const [dublagemDisponiveis, setDublagemDisponiveis] = useState([]);
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
  
  const [valorClicadoMidia, setValorClicadoMidia] = useState("videos");

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

            <p>Contagem de votos: {movie.vote_count}</p>

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

      <MidiaFilmeContainer>
        <section className="filmes-fotos-videos">
          <header>
            <button onClick={() => setValorClicadoMidia("videos")} name="video">
              Videos
            </button>
            <button onClick={() => setValorClicadoMidia("fotos")} name="fotos">
              Photos
            </button>
          </header>

          <FilmeMidia click={valorClicadoMidia} />
        </section>

        <AvaliacaoContainer>
          <div>
            <Star size={18} color="#a79520" weight="fill" />
            <span>7,0</span>
            |
            <Star size={18} className="star" />
            <span> rate this</span>
          </div>

          <span className="watchLater">
            Wath Later
            <BookmarkSimple size={22} weight="bold" className="bookmark" />
          </span>
        </AvaliacaoContainer>

        <iframe
          className="trailer"
          src="https://www.youtube.com/embed/F3OxA9Cz17A?si=7xC9b4qoGtYOADMs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </MidiaFilmeContainer>
    </>
  );
}
