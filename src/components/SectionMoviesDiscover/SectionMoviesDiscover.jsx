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

export function SectionMoviesDiscover() {
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const requestMoviesDiscover = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&page=${page}`,
      );
      const data = await response.json();
      setMovies(data);
      setTotalPages(data.total_pages)
    };
    requestMoviesDiscover();
  }, [page]);

  const toNextPage = () => {
    setPage(page + 1);
  };
  return (
    <Container>
      <ContainerOfStreams>{/* Onde os filmes vão ficar */}</ContainerOfStreams>
      <Paginator>
        <PreviousPage>Voltar para página anterior</PreviousPage>
        <ActualPage>
          Página <span> {page} </span> de <span> {totalpages} </span>
        </ActualPage>
        <NextPage
          onClick={() => {
            toNextPage();
          }}
        >
          Ir para próxima página
        </NextPage>
      </Paginator>
    </Container>
  );
}
