import { useCallback, useEffect, useState } from "react";
import { data } from "../../api/request_data";
import {
  paramsBase,
  post_path,
  urlMovieSearchById,
  urlSerieSearchById,
} from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { Play } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Hero() {
  const [stream, setStream] = useState([]);
  const [streamDetails, setStreamDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const post_data = async () => {
      const arrayData = await data();
      setStream(arrayData);
    };
    post_data();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const details = [];

      for (const item of stream) {
        let streamData;
        if (item.media_type === "movie") {
          streamData = await fetch(
            `${urlMovieSearchById}${item.id}${paramsBase}`,
          ).then((data) => data.json());
        } else if (item.media_type === "tv") {
          streamData = await fetch(
            `${urlSerieSearchById}${item.id}${paramsBase}`,
          ).then((data) => data.json());
        }
        details.push(streamData);
      }
      setStreamDetails(details);
    };
    fetchData();
  }, [stream, streamDetails]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  const nextMovie = useCallback(() => {
    if (!isPaused) {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === stream.length - 1 ? 0 : prevIndex + 1,
      );
    }
  }, [stream, isPaused]);

  useEffect(() => {
    const timer = setInterval(nextMovie, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [nextMovie]);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
      <div
        className="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {isLoading ? (
          <Skeleton style={{ width: "100vw", height: "91vh" }} />
        ) : (
          streamDetails.map((stream, index) => (
            <S.Hero
              style={{
                backgroundImage: `url('${post_path}${stream.backdrop_path}')`,
                display: index === currentMovieIndex ? "flex" : "none",
              }}
              key={index}
            >
              <S.HeroGradientOverlay />
              <S.DescFilme>
                <h1>{stream.title ? stream.title : stream.name}</h1>
                <p>{stream.overview}</p>
                <h3>
                  <S.ImdbLogo>IMBD </S.ImdbLogo>
                  {stream.vote_average.toFixed(1)} |{" "}
                  {stream.release_date
                    ? stream.release_date
                    : stream.first_air_date}{" "}
                  |{" "}
                  {stream.runtime
                    ? `${stream.runtime} min`
                    : stream.number_of_seasons
                    ? `${stream.number_of_seasons} temporada(s)`
                    : "Carregando..."}
                </h3>
              </S.DescFilme>
              <S.NavBarFilme>
                <button>
                  <NavLink
                    to={
                      stream.title
                        ? `/movie/${stream.id}`
                        : `/serie/${stream.id}`
                    }
                  >
                    <Play size={32} color="#fcfcfc" />
                  </NavLink>
                </button>
                {/* <button>
              <Plus size={32} color="#fcfcfc" weight="bold" />
            </button> */}
              </S.NavBarFilme>
            </S.Hero>
          ))
        )}
      </div>
    </SkeletonTheme>
  );
}
