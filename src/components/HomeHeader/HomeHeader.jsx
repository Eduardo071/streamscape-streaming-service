import * as S from "../HomeStyle/HomeStyle";
import { User, MagnifyingGlass } from "phosphor-react";
import logo from "../../images/streamscape_logo.png";
import { NavLink } from "react-router-dom";

// link logo => home
export function HomeHeader() {
  return (
    <S.Header>
      <NavLink to="/" title="Home">
        <S.Logo src={logo} alt="logo streamscape" />
      </NavLink>
      <S.NavBar>
        <a href="">Filmes</a>
        <a href="">Animações</a>
        <a href="">Séries</a>
        <a href="">Coleções</a>
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
