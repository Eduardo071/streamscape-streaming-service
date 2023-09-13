import { useEffect, useState } from "react";

import { upcoming } from "../../api/upcoming_film";
import { post_path_154 } from "../../variables/variables";

export function SectionSliders() {
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
    <section>
      <section>
        <div>
          <h2>Lançamentos</h2>
          <h2>Ver todos</h2>
        </div>
        <div>
          {lancamento.map((movie, index) => (
            <>
            <div key={index}>
              <h3>{movie.vote_average}</h3>
              <img
                src={`${post_path_154}${movie.poster_path}`}
                alt="poster do filme"
              />
              <h1>{movie.title}</h1>
            </div>
            </>
          ))}
        </div>
      </section>
    </section>
  );
}
