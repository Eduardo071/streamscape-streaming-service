import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Background } from "../components/HomeStyle/HomeStyle";
import { SectionCollectionsDiscover } from "../components/SectionCollectionsDiscover/SectionCollectionsDiscover";

export function Collections(){
   
    return (
        <Background>
        <HomeHeader></HomeHeader>
        <SectionCollectionsDiscover></SectionCollectionsDiscover>
        <Footer></Footer>
        </Background>
    )
}