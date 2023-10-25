import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Background } from "../components/HomeStyle/HomeStyle";
import { SectionSeriesDiscover } from "../components/SectionSeriesDiscover/SectionSeriesDiscover";

export function Series(){
   
    return (
        <Background>
        <HomeHeader></HomeHeader>
        <SectionSeriesDiscover></SectionSeriesDiscover>
        <Footer></Footer>
        </Background>
    )
}