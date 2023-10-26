import { DescricaoCollection } from "../components/DescricaoCollection/DescricaoCollection";
import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

// Página responsável por mostrar detalhes da coleção
function Collection() {
  return (
    <div style={{background:"#191919"}}>
      <HomeHeader />
      <DescricaoCollection />
      <Footer />
    </div>
  );
}

export default Collection;
