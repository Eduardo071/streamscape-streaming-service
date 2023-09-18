import * as S from "../HomeStyle/HomeStyle";
import screen from "../../images/screen.png";

export function Offers() {
  return (
    <>
      <S.OfferSection>
        <S.ContainerOfferText>
          <h2>Assista onde quiser</h2>
          <p>
            Você paga uma vez para assistir os filmes e séries que quiser, se
            divirta podendo assistir de vários dispositivos
          </p>

          <button>Comece seu teste grátis</button>
        </S.ContainerOfferText>

        <img src={screen} alt="screen" />
      </S.OfferSection>
    </>
  );
}
