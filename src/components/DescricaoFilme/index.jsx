import { useEffect, useState } from "react";
import {
  ButtonPlayerStream,
  InfoFilmeContainer,
  MidiaFilmeContainer,
  MidiaFilmeContainerNoTrailer,
} from "../DescricaoFilmeStyle/styles";
import { useNavigate, useParams } from "react-router-dom";
import {
  paramsBase,
  post_path,
  urlMovieSearchById,
} from "../../variables/variables";
import { api_key } from "../../api/API_KEY";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Play } from "phosphor-react";

export function DescricaoFilmeSct() {
  const [movie, setMovie] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieCreators, setMovieCreators] = useState([]);
  const [dublagemDisponiveis, setDublagemDisponiveis] = useState([]);
  const [movieIdTrailer, setMovieIdTrailer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [streamsWithVideo, setStreamsWithVideo] = useState([]);
  const [streamWithVideo, setStreamWithVideo] = useState([]);
  const [playButtonRender, setPlayButtonRender] = useState(false);
  const { idMovie } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const requestStreamVideo = async () => {
      const response = await fetch(
        "https://streamscape-api.onrender.com/movies",
      );
      const data = await response.json();
      setStreamsWithVideo(data);
    };
    requestStreamVideo();
  }, [movie]);
  useEffect(() => {
    const thisStreamHasVideo = streamsWithVideo.some(
      (stream) => stream.external_id === movie.id
    );
    console.log(thisStreamHasVideo);
    if (thisStreamHasVideo) {
      const streamWithContent = streamsWithVideo.find(
        (stream) => stream.external_id === movie.id,
      );
      setStreamWithVideo(streamWithContent);
      setPlayButtonRender(true);
    } else {
      setPlayButtonRender(false);
    }
  }, [streamsWithVideo, movie]);

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

      const dataPtBR = await response.json();

      if (
        dataPtBR.results[0] === undefined ||
        dataPtBR.results[0] === null ||
        dataPtBR.results[0] === ""
      ) {
        const responseEN = await fetch(
          `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${api_key}`,
        );
        const dataEN = await responseEN.json();

        if (dataEN.results[0] && dataEN.results[0].key) {
          setMovieIdTrailer(dataEN.results[0].key);
        }
      } else {
        setMovieIdTrailer(dataPtBR.results[0].key);
      }
    };

    if (dublagemDisponiveis !== null) requestIdTrailerMovie();
  }, [idMovie, dublagemDisponiveis]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const handlePlayButtonClick = () => {
    navigate(`/play/${streamWithVideo.name.toLowerCase()}`);
  };

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
        <InfoFilmeContainer>
          <section>
            {isLoading ? (
              <>
                <Skeleton className="PosterImageSkeleton" />
                <Skeleton className="PosterTitleSkeleton" />
              </>
            ) : movie.backdrop_path ? (
              <>
                <img
                  src={`${post_path}${movie.backdrop_path}`}
                  alt="poster oficial do filme"
                />

                <h2>{movie.title}</h2>
              </>
            ) : (
              <>
                <div className="movieNoBackdropImage">
                  <h1>Imagem indisponível 😢</h1>
                </div>

                <h2>{movie.title}</h2>
              </>
            )}
          </section>

          <section>
            <p>
              {isLoading ? (
                <Skeleton count={3} />
              ) : movie.overview ? (
                movie.overview
              ) : (
                "Descrição indisponível 😢"
              )}
            </p>

            <div className="info-filme">
              <p>
                {isLoading ? (
                  <Skeleton count={2} />
                ) : movie.adult ? (
                  `Classificação adulta | ${movie.release_date}`
                ) : (
                  `Classificação não adulta | ${movie.release_date}`
                )}
              </p>

              <div className="generos-filme">
                {movieGenres.map((genre, index) => (
                  <span key={index}>
                    {isLoading ? (
                      <Skeleton className="genresSkeleton" />
                    ) : index !== movieGenres.length - 1 ? (
                      `${genre.name}|`
                    ) : (
                      `${genre.name}`
                    )}
                  </span>
                ))}

                {isLoading ? (
                  <Skeleton />
                ) : (
                  <div className="containerImdb">
                    <span className="imdb">IMBD </span>
                    <span className="voteAvg">{movie.vote_average}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="info-producao">
              {isLoading ? (
                <Skeleton count={4} style={{ marginBottom: "3.5rem" }} />
              ) : (
                <>
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
                </>
              )}
            </div>

            {isLoading ? (
              <Skeleton
                width={200}
                height={50}
                style={{ borderRadius: "0.8rem" }}
              />
            ) : playButtonRender ? (
              <ButtonPlayerStream onClick={handlePlayButtonClick}>
                <Play size={35} /> Assistir
              </ButtonPlayerStream>
            ) : null}
          </section>
        </InfoFilmeContainer>
        {movieIdTrailer !== undefined ? (
          <MidiaFilmeContainer>
            {isLoading ? (
              <Skeleton className="trailerSkeleton" />
            ) : (
              <iframe
                className="trailer"
                src={`https://www.youtube.com/embed/${movieIdTrailer}?si=JyBwrEzapF-ldlbW`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </MidiaFilmeContainer>
        ) : (
          <MidiaFilmeContainerNoTrailer>
            {isLoading ? (
              <Skeleton
                style={{ width: "60rem", height: "4rem", margin: "10rem" }}
              />
            ) : (
              <>
                <div className="noText">
                  <h1> O filme não possui trailer disponível </h1>
                </div>
              </>
            )}
          </MidiaFilmeContainerNoTrailer>
        )}
      </SkeletonTheme>
    </>
  );
}
