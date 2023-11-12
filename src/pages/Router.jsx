import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Filme from "./Filme";
import Home from "./Home";
// import { Profile } from "./Profile";
import { Planos } from "./Planos";
import { Filmes } from "./Filmes";
import { Series } from "./Series";
import Serie from "./Serie";
import Collection from "./Collection";
import { Collections } from "./Collections";
import { Player } from "./Player";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/movie/:idMovie" element={<Filme />} />
        <Route exact path="/serie/:idSerie" element={<Serie />} />
        <Route exact path="/collection/:idCollection" element={<Collection />} />
        <Route exact path="/movies/discover" element={<Filmes />} />
        <Route exact path="/series/discover" element={<Series />} />
        <Route exact path="/collections/discover" element={<Collections />} />
        {/* <Route exact path="/profile" element={<Profile />} /> */}
        <Route exact path="/planos" element={<Planos />} />
        <Route exact path="/play/:streamName" element={<Player/>}/>
      </Routes>
    </BrowserRouter>
  );
}
