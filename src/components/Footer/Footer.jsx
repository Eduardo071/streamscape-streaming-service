import { useEffect, useState } from "react";
import * as S from "../HomeStyle/HomeStyle";
import { Copyright, GithubLogo, LinkedinLogo } from "phosphor-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
      <S.ContainerFooter
        style={{
          background: "#000000",
          width: "100%",
          height: 100,
          padding: "2rem",
        }}
      >
        <h2>
          {isLoading ? (
            <Skeleton style={{ width: "40rem", height: "3rem" }} />
          ) : (
            <>
              <Copyright size={32} color="#fcfcfc" /> 2023 by Eduardo Borges &
              Samuel Vítor
            </>
          )}
        </h2>
        <ul>
          <li>
            {isLoading ? (
              <Skeleton circle style={{ width: "3.5rem", height: "3.5rem" }} />
            ) : (
              <GithubLogo size={32} color="#fcfcfc" weight="fill" />
            )}
          </li>
          <li>
            {isLoading ? (
              <Skeleton circle style={{ width: "3.5rem", height: "3.5rem" }} />
            ) : (
              <LinkedinLogo size={32} color="#fcfcfc" weight="fill" />
            )}
          </li>
        </ul>
      </S.ContainerFooter>
    </SkeletonTheme>
  );
}
