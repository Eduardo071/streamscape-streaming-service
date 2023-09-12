import * as S from "../HomeStyle/HomeStyle";
import { User, MagnifyingGlass } from "phosphor-react";
import logo from "../../images/streamscape_logo.png";

export function HomeHeader() {
  return (
    <S.Header>
      <S.Logo src={logo} alt="logo streamscape" />
      <S.NavBar>
        <a href="">Movies</a>
        <a href="">Animations</a>
        <a href="">Series</a>
        <a href="">Collections</a>
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
