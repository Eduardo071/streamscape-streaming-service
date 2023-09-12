import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Filme from "./Filme";
import Home from "./Home";

//  Função de Rotas
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/titulo-do-filme" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}
