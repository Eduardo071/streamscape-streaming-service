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
import { post_path } from "../../variables/variables";
import * as S from "../DiscoverStyles/DiscoverStyles";
import { NavLink } from "react-router-dom";
import { SearchBox } from "../SearchBox/SearchBox";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function SectionMoviesDiscover() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [notPreviously, setNotPreviously] = useState(false);
  const [notNext, setNotNext] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOneTime, setIsLoadingOneTime] = useState(true);

  useEffect(() => {
    const requestMoviesDiscover = async () => {
      if (query === "") {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&page=${page}`,
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } else {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=pt-BR&page=${page}`,
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    };
    requestMoviesDiscover();
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
  }, [movies]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOneTime(false);
    }, 2000);
  });

  const toNextPage = () => {
    setPage(page + 1);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
  };

  const setTermToSearch = (e) => {
    setQuery(e.target.value)
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
        {movies.length !== 0 ? (
          <ContainerOfStreams>
            {movies.map((movie, index) => (
              <NavLink key={index} to={`/movie/${movie.id}`}>
                <S.Card>
                  {isLoading ? (
                    <>
                      <Skeleton className="imageCardSkeleton" />
                      <Skeleton className="titleCardSkeleton" />
                    </>
                  ) : (
                    <>
                      <S.ImagePost
                        src={`${post_path}${movie.poster_path}`}
                        alt=""
                      />
                      <S.StreamTitle>{movie.title}</S.StreamTitle>
                    </>
                  )}
                </S.Card>
              </NavLink>
            ))}
          </ContainerOfStreams>
        ) : (
          <S.ContainerNoStreams>
            <h1> {isLoading ? (
                <Skeleton className="textExceptionSkeleton" />
              ) : (
                "Filme não encontrado"
              )} </h1>
          </S.ContainerNoStreams>
        )}

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
