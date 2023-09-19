import { Background } from "../components/Background/Background";
import { Footer } from "../components/Footer/Footer";
import { HeroProfile } from "../components/HeroProfile/HeroProfile";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";

export function Profile() {
  return (
    <Background>
      <HomeHeader />
      <HeroProfile/>
      <Footer />
    </Background>
  );
}
