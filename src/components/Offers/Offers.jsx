import * as S from "../HomeStyle/HomeStyle";
import screen from "../../images/screen.png";
import { NavLink } from "react-router-dom";

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
          <NavLink style={{display: 'flex', justifyContent: 'center', minWidth: '40rem', minHeight: '8rem', alignItems: 'center'}} to={`/planos`}>
            <button>Comece seu teste grátis</button>
          </NavLink>
        </S.ContainerOfferText>

        <img src={screen} alt="screen" />
      </S.OfferSection>
    </>
  );
}
