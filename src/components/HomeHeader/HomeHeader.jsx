import * as S from "../HomeStyle/HomeStyle";
import { MagnifyingGlass } from "phosphor-react";
import logo from "../../images/streamscape_logo.png";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export function HomeHeader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <S.Header>
      <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
        <NavLink to="/" title="Home">
          {isLoading ? (
            <Skeleton width={190} height={50} />
          ) : (
            <S.Logo src={logo} alt="logo streamscape" />
          )}
        </NavLink>
        <S.NavBar>
          <NavLink to="/movies/discover">
            <span>
              {isLoading ? <Skeleton width={60} height={20} /> : "Filmes"}
            </span>
          </NavLink>
          <NavLink to="/series/discover">
            <span>
              {isLoading ? <Skeleton width={50} height={20} /> : "Séries"}
            </span>
          </NavLink>
          <NavLink to="/collections/discover">
            <span>
              {isLoading ? <Skeleton width={70} height={20} /> : "Coleções"}
            </span>
          </NavLink>
        </S.NavBar>
        <S.MenuOptions>
          {/* <li>
            <button>
              <User size={32} color="#fcfcfc" />
            </button>
          </li> */}
          <li>
            {isLoading ? (
              <Skeleton width={40} height={40} circle />
            ) : (
              <button>
                <MagnifyingGlass size={32} color="#fcfcfc" />
              </button>
            )}
          </li>
        </S.MenuOptions>
      </SkeletonTheme>
    </S.Header>
  );
}
