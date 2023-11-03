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

export function SectionSeriesDiscover() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [series, setSeries] = useState([]);
  const [notPreviously, setNotPreviously] = useState(false);
  const [notNext, setNotNext] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOneTime, setIsLoadingOneTime] = useState(true);

  useEffect(() => {
    const requestSeriesDiscover = async () => {
      if (query == "") {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=pt-BR&page=${page}&sort_by=vote_count.desc`,
        );
        const data = await response.json();
        setSeries(data.results);
        setTotalPages(data.total_pages);
        window.scrollTo(0, 0);
      } else {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}&language=pt-BR&page=${page}`,
        );
        const data = await response.json();
        setSeries(data.results);
        setTotalPages(data.total_pages);
      }
      window.scrollTo(0, 0);
    };
    requestSeriesDiscover();
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
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOneTime(false);
    }, 3000);
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
    <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
      <Container>
        {isLoadingOneTime ? (
          <Skeleton className="searchBoxSkeleton" />
        ) : (
          <SearchBox funtionSetSearch={setTermToSearch} />
        )}
        {series.length !== 0 ? (
          <ContainerOfStreams>
            {series.map((serie, index) => (
              <NavLink key={index} to={`/serie/${serie.id}`}>
                <S.Card>
                  {isLoading ? (
                    <>
                      <Skeleton className="imageCardSkeleton" />
                      <Skeleton className="titleCardSkeleton" />
                    </>
                  ) : (
                    <>
                      {serie.poster_path ? (
                        <S.ImagePost
                          src={`${post_path}${serie.poster_path}`}
                          alt=""
                        />
                      ) : (
                        <S.NoImagePost>
                          <h1>Imagem indisponível 😢</h1>
                        </S.NoImagePost>
                      )}
                      <S.StreamTitle>{serie.name}</S.StreamTitle>
                      
                    </>
                  )}
                </S.Card>
              </NavLink>
            ))}
          </ContainerOfStreams>
        ) : (
          <S.ContainerNoStreams>
            <h1>
              {isLoading ? (
                <Skeleton className="textExceptionSkeleton" />
              ) : (
                "Série não encontrada"
              )}
            </h1>
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
      </Container>
    </SkeletonTheme>
  );
}
