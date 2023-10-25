import * as S from "../HomeStyle/HomeStyle";
import { User, MagnifyingGlass } from "phosphor-react";
import logo from "../../images/streamscape_logo.png";
import { NavLink } from "react-router-dom";

export function HomeHeader() {
  return (
    <S.Header>
      <NavLink to="/" title="Home">
        <S.Logo src={logo} alt="logo streamscape" />
      </NavLink>
      <S.NavBar>
        <NavLink to="/movies/discover">
          <span>Filmes</span>
        </NavLink>
        <NavLink to="/animations/discover">
          <span>Animações</span>
        </NavLink>
        <NavLink to="/series/discover">
          <span>Séries</span>
        </NavLink>
        <NavLink to="/colections/discover">
          <span>Coleções</span>
        </NavLink>
      </S.NavBar>
      <S.MenuOptions>
        <li>
          <button>
            <User size={32} color="#fcfcfc" />
          </button>
        </li>
        <li>
          <button>
            <MagnifyingGlass size={32} color="#fcfcfc" />
          </button>
        </li>
      </S.MenuOptions>
    </S.Header>
  );
}
