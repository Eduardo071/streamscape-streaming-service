import { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { upcoming } from "../../api/upcoming_film";
import { post_path_154 } from "../../variables/variables";
import * as S from "../HomeStyle/HomeStyle";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

export function SectionSliders() {
  
  const leftArrowEl = useRef(null);
  const rightArrowEl = useRef(null);
  const [lancamento, setLancamento] = useState([]);

  useEffect(() => {
    const data = async () => {
      await upcoming().then((response) => {
        setLancamento(response);
      });
    };
    data();
    console.log(lancamento);
  });
  return (
    <S.Container>
      <S.ContainerUpcoming>
        <S.HeaderContainer>
          <h2>Lançamentos</h2>
          <h2>Ver todos</h2>
        </S.HeaderContainer>
        <S.ContainerGlider>
          <ArrowCircleLeft ref={leftArrowEl} size={32} color="#fcfcfc" />

          <Glider hasArrows slidesToShow={6} slidesToScroll={5} arrows={{prev: leftArrowEl.current, next: rightArrowEl.current,}}>
            {lancamento.map((movie, index) => (
              <S.CardMovie key={index}>
                <img
                  src={`${post_path_154}${movie.poster_path}`}
                  alt="poster do filme"
                />
                <h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
              </S.CardMovie>
            ))}
          </Glider>

          <ArrowCircleRight ref={rightArrowEl} size={32} color="#fcfcfc" />
        </S.ContainerGlider>
      </S.ContainerUpcoming>
    </S.Container>
  );
}
