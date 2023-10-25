import { Background } from "../components/Background/Background";
import { DescricaoSerie } from "../components/DescricaoSerie/DescricaoSerie";
import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

// Página responsável por mostrar detalhes da série e seu trailer
function Serie() {
  return (
    <Background>
      <HomeHeader />
      <DescricaoSerie />
      <Footer />
    </Background>
  );
}

export default Serie;