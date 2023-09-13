import { useEffect, useState } from "react";
import { data } from "../../api/request_data";
import { post_path } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { Play, Plus, Star } from "phosphor-react";
import { movie_data } from "../../api/movie_details";

export function Hero() {
  const [image_path, setImage_path] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [rate, setRate] = useState(0);
  const [releaseDate, setReleaseDate] = useState("");
  const [movieId, setMovieId] = useState("");
  const [runtime, setRunTime] = useState("");

  useEffect(() => {
    const post_image_data = async () => {
      await data().then((data) => {
        setImage_path(data.backdrop_path);
        setTitle(data.title);
        setOverview(data.overview);
        setRate(data.vote_average);
        setReleaseDate(data.release_date);
        setMovieId(data.id);
      });
    };
    post_image_data();
  }, [movieId]);

  useEffect(() => {
    if (movieId) {
      movie_data(movieId).then((movieData) => {
        setRunTime(movieData.runtime);
      });
    }
  });

  return (
    <S.Hero style={{ backgroundImage: `url('${post_path}${image_path}')` }}>
      <S.HeroGradientOverlay />
      <S.DescFilme>
        <h1>{title}</h1>
        <p>{overview}</p>
        <h3>
          <Star size={32} color="#fcfcfc" weight="fill" />
          {rate.toFixed(1)} | {releaseDate} |{" "}
          {runtime ? `${runtime} min` : "Carregando..."}
        </h3>
      </S.DescFilme>
      <S.NavBarFilme>
        <button>
          <Play size={32} color="#fcfcfc" />
        </button>
        <button>
          <Plus size={32} color="#fcfcfc" weight="bold" />
        </button>
      </S.NavBarFilme>
    </S.Hero>
  );
}
