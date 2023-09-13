import { Background } from "../components/Background/Background";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Hero } from "../components/Hero/Hero";
import { SectionSliders } from "../components/SectionSliders/SectionSliders";

// Página principal pela Home do Streaming, mostrando abas de streaming, filtros, login e etc...
function Home() {
  return (
    <Background>
      <HomeHeader />
      <Hero />
      <SectionSliders />
    </Background>
  );
}

export default Home;
