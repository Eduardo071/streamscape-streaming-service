import { Footer } from "../components/Footer/Footer";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { Background } from "../components/HomeStyle/HomeStyle";
// import { SectionMoviesDiscover } from "../components/SectionMoviesDiscover/SectionMoviesDiscover";

export function AllStreams(){
   
    return (
        <Background>
        <HomeHeader></HomeHeader>
        {/* <SectionMoviesDiscover></SectionMoviesDiscover> */}
        <Footer></Footer>
        </Background>
    )
}