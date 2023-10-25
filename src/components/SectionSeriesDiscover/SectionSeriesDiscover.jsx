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

export function SectionSeriesDiscover() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [series, setSeries] = useState([]);
  const [notPreviously, setNotPreviously] = useState(false);
  const [notNext, setNotNext] = useState(false);
  useEffect(() => {
    const requestSeriesDiscover = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=pt-BR&page=${page}&sort_by=vote_count.desc`,
      );
      const data = await response.json();
      setSeries(data.results);
      setTotalPages(data.total_pages);
    };
    requestSeriesDiscover();
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
  }, [page, totalPages]);

  const toNextPage = () => {
    setPage(page + 1);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
  };
  return (
    <Container>
      <ContainerOfStreams>
        {series.map((serie, index) => (
          <NavLink key={index} to={`/serie/${serie.id}`}>
          <S.Card>
            <S.ImagePost src={`${post_path}${serie.poster_path}`} alt="" />
            <S.StreamTitle>{serie.name}</S.StreamTitle>
          </S.Card>
          </NavLink>
        ))}
      </ContainerOfStreams>
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
