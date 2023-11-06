import { useEffect, useState } from "react";
import {
  ActualPage,
  Container,
  ContainerOfStreams,
  NextPage,
  Paginator,
  PreviousPage,
} from "../DiscoverStyles/DiscoverStyles";
import { api_key } from "../../api/API_KEY";
import { post_path_500 } from "../../variables/variables";
import * as S from "../DiscoverStyles/DiscoverStyles";
import { NavLink } from "react-router-dom";
import { SearchBox } from "../SearchBox/SearchBox";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function SectionCollectionsDiscover() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [collections, setCollections] = useState([]);
  const [notPreviously, setNotPreviously] = useState(false);
  const [notNext, setNotNext] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOneTime, setIsLoadingOneTime] = useState(true);
  useEffect(() => {
    const requestCollectionsDiscover = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/collection?query=${query}&api_key=${api_key}&language=pt-BR&page=${page}`,
      );
      const data = await response.json();
      setCollections(data.results);
      setTotalPages(data.total_pages);
    };
    requestCollectionsDiscover();
    window.scrollTo(0, 0);
    if (page === 1) {
      setNotPreviously(true);
    } else {
      setNotPreviously(false);
    }
    if (page === totalPages) {
      setNotNext(true);
    } else {
      setNotNext(false);
    }
  }, [page, totalPages, query]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOneTime(false);
    }, 2000);
  });

  const toNextPage = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
    setIsLoading(true);
  };

  const setTermToSearch = (e) => {
    setQuery(e.target.value);
    setPage(totalPages / totalPages);
    setIsLoading(true);
  };
  return (
    <Container>
      <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
        {isLoadingOneTime ? (
          <Skeleton className="searchBoxSkeleton" />
        ) : (
          <SearchBox funtionSetSearch={setTermToSearch} />
        )}
        {query !== "" && collections.length !== 0 ? (
          <ContainerOfStreams>
            {collections.map((collection, index) => (
              <NavLink key={index} to={`/collection/${collection.id}`}>
                <S.Card>
                  {isLoading ? (
                    <>
                      <Skeleton className="imageCardSkeleton" />
                      <Skeleton className="titleCardSkeleton" />
                    </>
                  ) : (
                    <>
                      {collection.poster_path ? (
                        <LazyLoadImage
                          src={`${post_path_500}${collection.poster_path}`}
                          alt=""
                          style={{ width: "22rem", borderRadius: "0.5rem" }}
                          effect="blur"
                        />
                      ) : (
                        <S.NoImagePost>
                          <h1>Imagem indisponível 😢</h1>
                        </S.NoImagePost>
                      )}
                      <S.StreamTitle>{collection.name}</S.StreamTitle>
                    </>
                  )}
                </S.Card>
              </NavLink>
            ))}
          </ContainerOfStreams>
        ) : query === "" ? (
          <S.ContainerNoStreams>
            <h1>
              {isLoading ? (
                <Skeleton className="textExceptionSkeleton" />
              ) : (
                "Busque por alguma coleção"
              )}
            </h1>
          </S.ContainerNoStreams>
        ) : collections.length === 0 && query !== "" ? (
          <S.ContainerNoStreams>
            <h1>
              {isLoading ? (
                <Skeleton className="textExceptionSkeleton" />
              ) : (
                "Coleção não encontrada"
              )}
            </h1>
          </S.ContainerNoStreams>
        ) : null}
        <Paginator>
          {isLoading ? (
            <>
              <Skeleton className="previousButtonSkeleton" />
              <Skeleton className="pageInformationSkeleton" />
              <Skeleton className="nextButtonSkeleton" />
            </>
          ) : (
            <>
              <PreviousPage
                onClick={() => {
                  toPreviousPage();
                }}
                disabled={notPreviously}
              >
                Voltar para página anterior
              </PreviousPage>
              <ActualPage>
                Página <span> {page} </span> de <span> {totalPages} </span>
              </ActualPage>
              <NextPage
                onClick={() => {
                  toNextPage();
                }}
                disabled={notNext}
              >
                Ir para próxima página
              </NextPage>
            </>
          )}
        </Paginator>
      </SkeletonTheme>
    </Container>
  );
}
