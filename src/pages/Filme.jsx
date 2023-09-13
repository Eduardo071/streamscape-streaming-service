import { DescricaoFilmeSct } from "../components/DescricaoFilmeSct";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

// Página responsável por mostrar detalhes do filme e seu trailer
function Filme() {
  return (
    <>
      <HomeHeader/>
      <DescricaoFilmeSct/>
    </>
  );
}

export default Filme;
