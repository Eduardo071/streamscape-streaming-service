import { DescricaoFilmeSct } from "../components/DescricaoFilme";
import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

// Página responsável por mostrar detalhes do filme e seu trailer
function Filme() {
  return (
    <div style={{background:"#191919"}}>
      <HomeHeader />
      <DescricaoFilmeSct />
      <Footer />
    </div>
  );
}

export default Filme;
