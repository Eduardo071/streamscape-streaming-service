import { Background } from "../components/Background/Background";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

// Página principal pela Home do Streaming, mostrando abas de streaming, filtros, login e etc...
function Home() {
  return (
    <Background>
      <HomeHeader />
    </Background>
  );
}

export default Home;
