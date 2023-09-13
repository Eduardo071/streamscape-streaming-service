import { useEffect, useState } from "react";
import { data } from "../../api/request_data";
import { post_path } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { Play, Plus, Star } from "phosphor-react";

export function Hero() {
  const [image_path, setImage_path] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    const post_image_data = async () => {
      await data().then((data) => {
        setImage_path(data.backdrop_path);
        setTitle(data.title);
        setOverview(data.overview);
        setRate(data.vote_average);
      });
    };
    post_image_data();
  }, []);
  return (
    <S.Hero style={{ backgroundImage: `url('${post_path}${image_path}')` }}>
      <S.HeroGradientOverlay />
      <S.DescFilme>
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>
          <Star size={32} color="#fcfcfc" weight="fill" />
          {rate}
        </p>
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
