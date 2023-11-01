import * as S from "../HomeStyle/HomeStyle";
import screen from "../../images/screen.png";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export function Offers() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <>
      <S.OfferSection>
        <SkeletonTheme baseColor="#202020" highlightColor="#2b2a2a">
          <S.ContainerOfferText>
            {isLoading ? (
              <>
                <Skeleton className="titleOfferSkeleton" />
                <Skeleton className="descriptionOfferSkeleton" count={2} />
                <Skeleton className="buttonOfferSkeleton" />
              </>
            ) : (
              <>
                <h2>Assista onde quiser</h2>
                <p>
                  Você paga uma vez para assistir os filmes e séries que quiser,
                  se divirta podendo assistir de vários dispositivos
                </p>
                <NavLink
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    minWidth: "40rem",
                    minHeight: "8rem",
                    alignItems: "center",
                  }}
                  to={`/planos`}
                >
                  <button>Comece seu teste grátis</button>
                </NavLink>
              </>
            )}
          </S.ContainerOfferText>
          {isLoading ? (
            <Skeleton className="imageOfferSkeleton" />
          ) : (
            <img src={screen} alt="screen" />
          )}
        </SkeletonTheme>
      </S.OfferSection>
    </>
  );
}
