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
  urlCollectionSearchById,
} from "../../variables/variables";
import { api_key } from "../../api/API_KEY";

export function DescricaoCollection() {
  const [collection, setCollection] = useState([]);
  const [collectionGenres, setCollectionGenres] = useState([]);
  const [collectionCreators, setCollectionCreators] = useState([]);
  const [dublagemDisponiveis, setDublagemDisponiveis] = useState([]);
  const [collectionIdTrailer, setCollectionIdTrailer] = useState();
  const { idCollection } = useParams();
  useEffect(() => {
    const requestApiCollectionId = async () => {
      const response = await fetch(
        `${urlCollectionSearchById}/${idCollection}${paramsBase}`,
      );
      const data = await response.json();
      setCollection(data);
      setCollectionGenres(data.genres);
      setCollectionCreators(data.production_companies);
      setDublagemDisponiveis(data.spoken_languages);
    };
    requestApiCollectionId();
  }, [collection, idCollection]);

  useEffect(() => {
    const requestIdTrailerCollection = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/collection/${idCollection}/videos?api_key=${api_key}&language=pt-BR`,
      );
      const dataPtBR = await response.json();
      if (
        dataPtBR.results[0] === undefined ||
        dataPtBR.results[0] === null ||
        dataPtBR.results[0] === ""
      ) {
        const responseEN = await fetch(
          `https://api.themoviedb.org/3/collection/${idCollection}/videos?api_key=${api_key}`,
        );
        const dataEN = await responseEN.json();
        setCollectionIdTrailer(dataEN.results[0].key);
      }
        setCollectionIdTrailer(dataPtBR.results[0].key);
    };
    if (dublagemDisponiveis !== null) requestIdTrailerCollection();
  }, [collection, idCollection, dublagemDisponiveis]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InfoFilmeContainer>
        <section>
          <img
            src={`${post_path}${collection.backdrop_path}`}
            alt="poster oficial do filme"
          />

          <h2>{collection.title}</h2>
        </section>

        <section>
          <p>{collection.overview}</p>

          <div className="info-filme">
            <p>
              {collection.adult
                ? "Classificação adulta"
                : "Classificação não adulta"}{" "}
              | {collection.release_date}
            </p>

            <p className="generos-filme">
              {collectionGenres.map((genre, index) => (
                <span key={index}>
                  {index !== collectionGenres.length - 1
                    ? `${genre.name}|`
                    : `${genre.name}`}
                </span>
              ))}

              <p className="imdb">
                <span>IMBD </span>
                <span>{collection.vote_average}</span>
              </p>
            </p>
          </div>

          <div className="info-producao">
            <p>
              Companias de produção:
              {collectionCreators.map((creator, index) => (
                <span key={index}>
                  {index !== collectionCreators.length - 1
                    ? `${creator.name},`
                    : `${creator.name}`}
                </span>
              ))}
            </p>

            <p>
              Contagem de votos: <span>{collection.vote_count}</span>
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
              <span>{collection.runtime} minutos</span>
            </p>
          </div>
        </section>
      </InfoFilmeContainer>
      {collectionIdTrailer !== undefined ? (
        <MidiaFilmeContainer>
          <iframe
            className="trailer"
            src={`https://www.youtube.com/embed/${collectionIdTrailer}?si=JyBwrEzapF-ldlbW`}
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
