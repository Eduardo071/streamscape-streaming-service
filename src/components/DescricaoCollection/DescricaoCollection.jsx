import { useEffect, useState } from "react";
import {
  InfoFilmeContainer,
  CollectionStreamsContainer,
} from "../DescricaoFilmeStyle/styles";
import { NavLink, useParams } from "react-router-dom";
import { post_path } from "../../variables/variables";
import { api_key } from "../../api/API_KEY";

export function DescricaoCollection() {
  const [collection, setCollection] = useState([]);
  const [collectionDetails, setCollectionDetails] = useState([]);
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
  return (
    <>
      <InfoFilmeContainer>
        <section>
          <img
            src={`${post_path}${collectionDetails.backdrop_path}`}
            alt="poster oficial do filme"
          />

          <h2>{collectionDetails.name}</h2>
        </section>

        <section>
          <p>{collectionDetails.overview}</p>
        </section>
      </InfoFilmeContainer>
      <CollectionStreamsContainer>
        {collection.map((movie, index) => (
          <NavLink to={`/movie/${movie.id}`} key={index}>
            <div>
              {movie.poster_path !== null ? (
                <img
                  src={`${post_path}${movie.poster_path}`}
                  alt="imagem do filme"
                />
              ) : (
                <div className="noImage">
                  <h1>Em Breve 🫣</h1>
                </div>
              )}
              <h1>{movie.title}</h1>
            </div>
          </NavLink>
        ))}
      </CollectionStreamsContainer>
    </>
  );
}
