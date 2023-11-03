import { useEffect, useState } from "react";
import {
  InfoFilmeContainer,
  CollectionStreamsContainer,
} from "../DescricaoFilmeStyle/styles";
import { NavLink, useParams } from "react-router-dom";
import { post_path } from "../../variables/variables";
import { api_key } from "../../api/API_KEY";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function DescricaoCollection() {
  const [collection, setCollection] = useState([]);
  const [collectionDetails, setCollectionDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCollection } = useParams();

  useEffect(() => {
    const requestIdTrailerCollection = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/collection/${idCollection}?api_key=${api_key}&language=pt-BR`,
      );
      const data = await response.json();
      setCollection(data.parts);
      setCollectionDetails(data);
    };
    requestIdTrailerCollection();
  }, [collection, idCollection]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
            ) : collectionDetails.backdrop_path ? (
              <>
                <img
                  src={`${post_path}${collectionDetails.backdrop_path}`}
                  alt="poster oficial da série"
                />

                <h2>{collectionDetails.name}</h2>
              </>
            ) : (
              <>
                <div className="movieNoBackdropImage">
                  <h1>Imagem indisponível 😢</h1>
                </div>

                <h2>{collectionDetails.name}</h2>
              </>
            )}
          </section>

          <section>
            <p>{isLoading ? <Skeleton /> : collectionDetails.overview}</p>
          </section>
        </InfoFilmeContainer>
        <CollectionStreamsContainer>
          {collection.map((movie, index) => (
            <NavLink to={`/movie/${movie.id}`} key={index}>
              <div>
                {isLoading ? (
                  <Skeleton className="imageMovieCollectionSkeleton" />
                ) : movie.poster_path !== null ? (
                  <img
                    src={`${post_path}${movie.poster_path}`}
                    alt="imagem do filme"
                  />
                ) : (
                  <div className="noImage">
                    <h1>Em Breve 🫣</h1>
                  </div>
                )}
                <h1>{isLoading ? <Skeleton className="titleMovieCollectionSkeleton"/> : movie.title}</h1>
              </div>
            </NavLink>
          ))}
        </CollectionStreamsContainer>
      </SkeletonTheme>
    </>
  );
}
