import { Background } from "../components/Background/Background";
import { Footer } from "../components/Footer/Footer";
import { HeroPlanos } from "../components/HeroPlanos";

import { HomeHeader } from "../components/HomeHeader/HomeHeader";

export function Planos() {
  return (
    <Background>
      <HomeHeader />
      <HeroPlanos />
      <Footer />
    </Background>
  );
}
