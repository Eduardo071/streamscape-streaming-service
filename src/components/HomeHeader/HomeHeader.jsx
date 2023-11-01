import * as S from "../HomeStyle/HomeStyle";
import { User, MagnifyingGlass } from "phosphor-react";
import logo from "../../images/streamscape_logo.png";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function HomeHeader() {
  return (
    <S.Header >
      <NavLink to="/" title="Home">
        {<S.Logo src={logo} alt="logo streamscape" /> || (
          <Skeleton width={50} />
        )}
      </NavLink>
      <S.NavBar>
        <NavLink to="/movies/discover">
          {<span>Filmes</span> || <Skeleton width={60} />}
        </NavLink>
        <NavLink to="/series/discover">
          {<span>Séries</span> || <Skeleton width={60} />}
        </NavLink>
        <NavLink to="/collections/discover">
          {<span>Coleções</span> || <Skeleton width={60} />}
        </NavLink>
      </S.NavBar>
      <S.MenuOptions>
        <li>
          <button>
            {<User size={32} color="#fcfcfc" /> || (
              <Skeleton circle width={40} />
            )}
          </button>
        </li>
        <li>
          <button>
            {<MagnifyingGlass size={32} color="#fcfcfc" /> || (
              <Skeleton circle width={40} />
            )}
          </button>
        </li>
      </S.MenuOptions>
    </S.Header>
  );
}
