import { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { upcoming } from "../../api/upcoming_film";
import { post_path } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { upcoming_series } from "../../api/upcoming_serie";
import { best_movies } from "../../api/best_movies";
import { popular_movies } from "../../api/popular_movies";
import { theatre_movies } from "../../api/theatre_movies";

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
  return (
    <S.Container>
      {/* Movies upcoming */}

      <S.ContainerSection>
        <S.HeaderContainer>
          <h2>Lançamentos (Filmes)</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft
            ref={leftArrowMoviesUpcoming}
            size={32}
            color="#fcfcfc"
          />

          <Glider
            hasArrows
            slidesToShow={6}
            slidesToScroll={5}
            arrows={{
              prev: leftArrowMoviesUpcoming.current,
              next: rightArrowMoviesUpcoming.current,
            }}
          >
            {lancamentoFilme.map((movie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path}${movie.poster_path}`}
                  alt="poster do filme"
                />
                <h1>
                  {movie.title} ({movie.release_date.split("-")[0]})
                </h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight
            ref={rightArrowMoviesUpcoming}
            size={32}
            color="#fcfcfc"
          />
        </S.ContainerGlider>
      </S.ContainerSection>

      {/* Best Series */}

      <S.ContainerSection>
        <S.HeaderContainer>
          <h2>Séries (Melhores Avaliações)</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft
            ref={leftArrowSeriesTopRated}
            size={32}
            color="#fcfcfc"
          />

          <Glider
            hasArrows
            slidesToShow={6}
            slidesToScroll={5}
            arrows={{
              prev: leftArrowSeriesTopRated.current,
              next: rightArrowSeriesTopRated.current,
            }}
          >
            {lancamentoSerie.map((serie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path}${serie.poster_path}`}
                  alt="poster da série"
                />
                <h1>
                  {serie.name} ({serie.first_air_date.split("-")[0]})
                </h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight
            ref={rightArrowSeriesTopRated}
            size={32}
            color="#fcfcfc"
          />
        </S.ContainerGlider>
      </S.ContainerSection>

      {/* Best Movies */}

      <S.ContainerSection>
        <S.HeaderContainer>
          <h2>Filmes (Melhores Avaliações)</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft
            ref={leftArrowMoviesTopRated}
            size={32}
            color="#fcfcfc"
          />

          <Glider
            hasArrows
            slidesToShow={6}
            slidesToScroll={5}
            arrows={{
              prev: leftArrowMoviesTopRated.current,
              next: rightArrowMoviesTopRated.current,
            }}
          >
            {melhoresFilmes.map((movie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path}${movie.poster_path}`}
                  alt="poster do filme"
                />
                <h1>
                  {movie.title} ({movie.release_date.split("-")[0]})
                </h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight
            ref={rightArrowMoviesTopRated}
            size={32}
            color="#fcfcfc"
          />
        </S.ContainerGlider>
      </S.ContainerSection>

      {/* Popular movies */}

      <S.ContainerSection>
        <S.HeaderContainer>
          <h2>Filmes (Mais Populares)</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft
            ref={leftArrowMoviesPopular}
            size={32}
            color="#fcfcfc"
          />

          <Glider
            hasArrows
            slidesToShow={6}
            slidesToScroll={5}
            arrows={{
              prev: leftArrowMoviesPopular.current,
              next: rightArrowMoviesPopular.current,
            }}
          >
            {popularFilme.map((movie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path}${movie.poster_path}`}
                  alt="poster do filme"
                />
                <h1>
                  {movie.title} ({movie.release_date.split("-")[0]})
                </h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight
            ref={rightArrowMoviesPopular}
            size={32}
            color="#fcfcfc"
          />
        </S.ContainerGlider>
      </S.ContainerSection>



      {/* Movies on Theatres */}

      <S.ContainerSection>
        <S.HeaderContainer>
          <h2>Filmes (No Cinema)</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft
            ref={leftArrowMoviesTheatre}
            size={32}
            color="#fcfcfc"
          />

          <Glider
            hasArrows
            slidesToShow={6}
            slidesToScroll={5}
            arrows={{
              prev: leftArrowMoviesTheatre.current,
              next: rightArrowMoviesTheatre.current,
            }}
          >
            {filmesCinema.map((movie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path}${movie.poster_path}`}
                  alt="poster do filme"
                />
                <h1>
                  {movie.title} ({movie.release_date.split("-")[0]})
                </h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight
            ref={rightArrowMoviesTheatre}
            size={32}
            color="#fcfcfc"
          />
        </S.ContainerGlider>
      </S.ContainerSection>
    </S.Container>
  );
}
