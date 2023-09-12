import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./Filme";
import Home from "./Home";

// Rotas
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route exact path="/titulo-do-filme" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}
