import { useEffect, useRef, useState } from "react";
import "glider-js/glider.min.css";
import * as S from "../HomeStyle/HomeStyle";
import { upcoming } from "../../api/upcoming_film";
import { upcoming_series } from "../../api/upcoming_serie";
import { best_movies } from "../../api/best_movies";
import { popular_movies } from "../../api/popular_movies";
import { theatre_movies } from "../../api/theatre_movies";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ContainerSectionGlider } from "../ContainerSectionGlider/ContainerSectionGlider";

export function SectionSliders() {
  const leftArrowMoviesUpcoming = useRef(null);
  const rightArrowMoviesUpcoming = useRef(null);
  const leftArrowSeriesTopRated = useRef(null);
  const rightArrowSeriesTopRated = useRef(null);
  const leftArrowMoviesTopRated = useRef(null);
  const rightArrowMoviesTopRated = useRef(null);
  const leftArrowMoviesPopular = useRef(null);
  const rightArrowMoviesPopular = useRef(null);
  const leftArrowMoviesTheatre = useRef(null);
  const rightArrowMoviesTheatre = useRef(null);
  const [lancamentoFilme, setLancamentoFilme] = useState([]);
  const [lancamentoSerie, setLancamentoSerie] = useState([]);
  const [melhoresFilmes, setMelhoresFilmes] = useState([]);
  const [popularFilme, setPopularFilme] = useState([]);
  const [filmesCinema, setFilmesCinema] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButtons, setIsLoadingButtons] = useState(true);

  useEffect(() => {
    const data = async () => {
      await upcoming().then((response) => {
        setLancamentoFilme(response);
      });
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      await upcoming_series().then((response) => {
        setLancamentoSerie(response);
      });
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      await best_movies().then((response) => {
        setMelhoresFilmes(response);
      });
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      await popular_movies().then((response) => {
        setPopularFilme(response);
      });
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      await theatre_movies().then((response) => {
        setFilmesCinema(response);
      });
    };
    data();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingButtons(false);
    }, 2999);
  }, [isLoadingButtons]);
  return (
    <S.Container>
      <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
        {/* Movies upcoming */}

        <ContainerSectionGlider
          prev={leftArrowMoviesUpcoming}
          next={rightArrowMoviesUpcoming}
          labelTitle=" Lançamentos (Filmes) "
          arrayStream={lancamentoFilme}
          streamType="movie"
        />

        {/* Best Series */}

        <ContainerSectionGlider
          prev={leftArrowSeriesTopRated}
          next={rightArrowSeriesTopRated}
          labelTitle=" Séries (Melhores Avaliações) "
          arrayStream={lancamentoSerie}
          streamType="serie"
        />

        {/* Best Movies */}

        <ContainerSectionGlider
          prev={leftArrowMoviesTopRated}
          next={rightArrowMoviesTopRated}
          labelTitle=" Filmes (Melhores Avaliações) "
          arrayStream={melhoresFilmes}
          streamType="movie"
        />

        {/* Popular movies */}

        <ContainerSectionGlider
          prev={leftArrowMoviesPopular}
          next={rightArrowMoviesPopular}
          labelTitle=" Filmes (Mais Populares) "
          arrayStream={popularFilme}
          streamType="movie"
        />

        {/* Movies on Theatres */}

        <ContainerSectionGlider
          prev={leftArrowMoviesTheatre}
          next={rightArrowMoviesTheatre}
          labelTitle=" Filmes (No Cinema) "
          arrayStream={filmesCinema}
          streamType="movie"
        />
      </SkeletonTheme>
    </S.Container>
  );
}