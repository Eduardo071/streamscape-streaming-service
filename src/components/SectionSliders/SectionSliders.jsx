import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    }, 2000);
  }, [isLoading]);

  return (
    <S.Container>
      <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
        {/* Movies upcoming */}

        <S.ContainerSection>
          <S.HeaderContainer>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <>
                  <Skeleton className="textLabelSkeleton" />
                  <Skeleton className="textLabelSkeleton" />
                </>
              ) : (
                <>
                  <h2>Lançamentos (Filmes)</h2>
                  <h2>Ver todos</h2>
                </>
              )}
            </SkeletonTheme>
          </S.HeaderContainer>
          <S.ContainerGlider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleLeft
                  ref={leftArrowMoviesUpcoming}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
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
                <Link key={index} to={`/movie/${movie.id}`}>
                  <S.CardMovie>
                    {isLoading ? (
                      <>
                        <Skeleton className="imageCardSkeleton" />
                        <Skeleton count={2} className="titleCardSkeleton" />
                      </>
                    ) : (
                      <>
                        <img
                          src={`${post_path}${movie.poster_path}`}
                          alt="poster do filme"
                        />
                        <h1>
                          {movie.title} ({movie.release_date.split("-")[0]})
                        </h1>
                      </>
                    )}
                  </S.CardMovie>
                </Link>
              ))}
            </Glider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleRight
                  ref={rightArrowMoviesUpcoming}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
          </S.ContainerGlider>
        </S.ContainerSection>

        {/* Best Series */}

        <S.ContainerSection>
          <S.HeaderContainer>
            {isLoading ? (
              <>
                <Skeleton className="textLabelSkeleton" />
                <Skeleton className="textLabelSkeleton" />
              </>
            ) : (
              <>
                <h2>Séries (Melhores Avaliações)</h2>
                <h2>Ver todos</h2>
              </>
            )}
          </S.HeaderContainer>
          <S.ContainerGlider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleLeft
                  ref={leftArrowSeriesTopRated}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
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
                <Link key={index} to={`/serie/${serie.id}`}>
                  <S.CardMovie>
                    {isLoading ? (
                      <>
                        <Skeleton className="imageCardSkeleton" />
                        <Skeleton count={2} className="titleCardSkeleton" />
                      </>
                    ) : (
                      <>
                        <img
                          src={`${post_path}${serie.poster_path}`}
                          alt="poster da série"
                        />
                        <h1>
                          {serie.name} ({serie.first_air_date.split("-")[0]})
                        </h1>
                      </>
                    )}
                  </S.CardMovie>
                </Link>
              ))}
            </Glider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleRight
                  ref={rightArrowSeriesTopRated}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
          </S.ContainerGlider>
        </S.ContainerSection>

        {/* Best Movies */}

        <S.ContainerSection>
          <S.HeaderContainer>
            {isLoading ? (
              <>
                <Skeleton className="textLabelSkeleton" />
                <Skeleton className="textLabelSkeleton" />
              </>
            ) : (
              <>
                <h2>Filmes (Melhores Avaliações)</h2>
                <h2>Ver todos</h2>
              </>
            )}
          </S.HeaderContainer>
          <S.ContainerGlider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleLeft
                  ref={leftArrowMoviesTopRated}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
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
                <Link to={`/movie/${movie.id}`} key={index}>
                  <S.CardMovie>
                    {isLoading ? (
                      <>
                        <Skeleton className="imageCardSkeleton" />
                        <Skeleton count={2} className="titleCardSkeleton" />
                      </>
                    ) : (
                      <>
                        <img
                          src={`${post_path}${movie.poster_path}`}
                          alt="poster do filme"
                        />
                        <h1>
                          {movie.title} ({movie.release_date.split("-")[0]})
                        </h1>
                      </>
                    )}
                  </S.CardMovie>
                </Link>
              ))}
            </Glider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleRight
                  ref={rightArrowMoviesTopRated}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
          </S.ContainerGlider>
        </S.ContainerSection>

        {/* Popular movies */}

        <S.ContainerSection>
          <S.HeaderContainer>
            {isLoading ? (
              <>
                <Skeleton className="textLabelSkeleton" />
                <Skeleton className="textLabelSkeleton" />
              </>
            ) : (
              <>
                <h2>Filmes (Mais Populares)</h2>
                <h2>Ver todos</h2>
              </>
            )}
          </S.HeaderContainer>
          <S.ContainerGlider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleLeft
                  ref={leftArrowMoviesPopular}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
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
                <Link key={index} to={`/movie/${movie.id}`}>
                  <S.CardMovie>
                    {isLoading ? (
                      <>
                        <Skeleton className="imageCardSkeleton" />
                        <Skeleton count={2} className="titleCardSkeleton" />
                      </>
                    ) : (
                      <>
                        <img
                          src={`${post_path}${movie.poster_path}`}
                          alt="poster do filme"
                        />
                        <h1>
                          {movie.title} ({movie.release_date.split("-")[0]})
                        </h1>
                      </>
                    )}
                  </S.CardMovie>
                </Link>
              ))}
            </Glider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleRight
                  ref={rightArrowMoviesPopular}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
          </S.ContainerGlider>
        </S.ContainerSection>

        {/* Movies on Theatres */}

        <S.ContainerSection>
          <S.HeaderContainer>
            {isLoading ? (
              <>
                <Skeleton className="textLabelSkeleton" />
                <Skeleton className="textLabelSkeleton" />
              </>
            ) : (
              <>
                <h2>Filmes (No Cinema)</h2>
                <h2>Ver todos</h2>
              </>
            )}
          </S.HeaderContainer>
          <S.ContainerGlider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleLeft
                  ref={leftArrowMoviesTheatre}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
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
                <Link key={index} to={`/movie/${movie.id}`}>
                  <S.CardMovie>
                    {isLoading ? (
                      <>
                        <Skeleton className="imageCardSkeleton" />
                        <Skeleton count={2} className="titleCardSkeleton" />
                      </>
                    ) : (
                      <>
                        <img
                          src={`${post_path}${movie.poster_path}`}
                          alt="poster do filme"
                        />
                        <h1>
                          {movie.title} ({movie.release_date.split("-")[0]})
                        </h1>
                      </>
                    )}
                  </S.CardMovie>
                </Link>
              ))}
            </Glider>
            <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
              {isLoading ? (
                <Skeleton
                  circle
                  width={32}
                  height={32}
                  style={{ margin: "1rem" }}
                />
              ) : (
                <ArrowCircleRight
                  ref={rightArrowMoviesTheatre}
                  size={32}
                  color="#fcfcfc"
                />
              )}
            </SkeletonTheme>
          </S.ContainerGlider>
        </S.ContainerSection>
      </SkeletonTheme>
    </S.Container>
  );
}
