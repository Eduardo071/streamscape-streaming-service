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
  urlSerieSearchById,
} from "../../variables/variables";
import { api_key } from "../../api/API_KEY";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function DescricaoSerie() {
  const [serie, setSerie] = useState([]);
  const [serieGenres, setSerieGenres] = useState([]);
  const [serieCreators, setSerieCreators] = useState([]);
  const [dublagemDisponiveis, setDublagemDisponiveis] = useState([]);
  const [serieIdTrailer, setSerieIdTrailer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { idSerie } = useParams();
  useEffect(() => {
    const requestApiSerieId = async () => {
      const response = await fetch(
        `${urlSerieSearchById}/${idSerie}${paramsBase}`,
      );
      const data = await response.json();
      setSerie(data);
      setSerieGenres(data.genres);
      setSerieCreators(data.production_companies);
      setDublagemDisponiveis(data.spoken_languages);
    };
    requestApiSerieId();
  }, [serie, idSerie]);

  useEffect(() => {
    const requestIdTrailerSerie = async () => {
      const responsePtBR = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${api_key}&language=pt-BR`,
      );
      const dataPtBR = await responsePtBR.json();
      if (
        dataPtBR.results[0] === undefined ||
        dataPtBR.results[0] === null ||
        dataPtBR.results[0] === ""
      ) {
        const responseEN = await fetch(
          `https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${api_key}`,
        );
        const dataEN = await responseEN.json();
        setSerieIdTrailer(dataEN.results[0].key);
      }
      setSerieIdTrailer(dataPtBR.results[0].key);
    };
    if (dublagemDisponiveis !== null) requestIdTrailerSerie();
  }, [serie, idSerie, dublagemDisponiveis]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
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
            ) : serie.backdrop_path ? (
              <>
                <img
                  src={`${post_path}${serie.backdrop_path}`}
                  alt="poster oficial da série"
                />

                <h2>{serie.name}</h2>
              </>
            ) : (
              <>
                <div className="movieNoBackdropImage">
                  <h1>Imagem indisponível 😢</h1>
                </div>

                <h2>{serie.name}</h2>
              </>
            )}
          </section>

          <section>
            <p>
              {isLoading ? (
                <Skeleton count={3} />
              ) : serie.overview ? (
                serie.overview
              ) : (
                "Descrição indisponível 😢"
              )}
            </p>

            <div className="info-filme">
              <p>
                {isLoading ? (
                  <Skeleton className="classificationSkeleton" />
                ) : serie.adult ? (
                  `Classificação adulta | ${serie.release_date}`
                ) : (
                  `Classificação não adulta | ${serie.release_date}`
                )}
              </p>

              <p className="generos-filme">
                {serieGenres.map((genre, index) => (
                  <span key={index}>
                    {isLoading ? (
                      <Skeleton className="genresSkeleton" />
                    ) : index !== serieGenres.length - 1 ? (
                      `${genre.name}|`
                    ) : (
                      `${genre.name}`
                    )}
                  </span>
                ))}

                {isLoading ? (
                  <Skeleton className="imdbSkeleton" />
                ) : (
                  <p className="imdb">
                    <span>IMBD </span>
                    <span>{serie.vote_average}</span>
                  </p>
                )}
              </p>
            </div>

            <div className="info-producao">
              {isLoading ? (
                <Skeleton count={5} style={{ marginBottom: "3.5rem" }} />
              ) : (
                <>
                  <p>
                    Companias de produção:
                    {serieCreators.map((creator, index) => (
                      <span key={index}>
                        {index !== serieCreators.length - 1
                          ? `${creator.name},`
                          : `${creator.name}`}
                      </span>
                    ))}
                  </p>

                  <p>
                    Contagem de votos: <span>{serie.vote_count}</span>
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
                    Temporadas:
                    <span>{serie.number_of_seasons}</span>
                  </p>
                  <p>
                    Episódios:
                    <span>{serie.number_of_episodes}</span>
                  </p>
                </>
              )}
            </div>
          </section>
        </InfoFilmeContainer>
        {serieIdTrailer !== undefined ? (
          <MidiaFilmeContainer>
            {isLoading ? (
              <Skeleton className="trailerSkeleton" />
            ) : (
              <iframe
                className="trailer"
                src={`https://www.youtube.com/embed/${serieIdTrailer}?si=JyBwrEzapF-ldlbW`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
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
                  <h1> A série não possui trailer disponível </h1>
                </div>
              </>
            )}
          </MidiaFilmeContainerNoTrailer>
        )}
      </SkeletonTheme>
    </>
  );
}
