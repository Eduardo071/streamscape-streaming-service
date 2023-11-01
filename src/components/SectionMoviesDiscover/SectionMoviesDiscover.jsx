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

export function SectionMoviesDiscover() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [notPreviously, setNotPreviously] = useState(false);
  const [notNext, setNotNext] = useState(false);
  const [query, setQuery] = useState("");
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

  const toNextPage = () => {
    setPage(page + 1);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
  };

  const setTermToSearch = (e) => setQuery(e.target.value);
  return (
    <Container>
      <SearchBox funtionSetSearch={setTermToSearch} />
      {movies.length !== 0 ? (
        <ContainerOfStreams>
          {movies.map((movie, index) => (
            <NavLink key={index} to={`/movie/${movie.id}`}>
              <S.Card>
                <S.ImagePost src={`${post_path}${movie.poster_path}`} alt="" />
                <S.StreamTitle>{movie.title}</S.StreamTitle>
              </S.Card>
            </NavLink>
          ))}
        </ContainerOfStreams>
      ) : (
        <S.ContainerNoStreams>
          <h1> Filme não encontrado </h1>
        </S.ContainerNoStreams>
      )}

      <Paginator>
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
      </Paginator>
    </Container>
  );
}
