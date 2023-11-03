import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as S from "../HomeStyle/HomeStyle";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { GliderComponents } from "../GliderComponent/GliderComponent";

export function ContainerSectionGlider({labelTitle, prev, next, arrayStream, streamType }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect((() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1999);
  }))

  return (
    <S.ContainerSection>
      <S.HeaderContainer>
        <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
          {isLoading ? (
            <>
              <Skeleton className="textLabelSkeleton" />
              <Skeleton className="textLabelSkeleton" />
            </>
          ) : (
            <>
              <h2>{labelTitle}</h2>
              <h2>Ver todos</h2>
            </>
          )}
        </SkeletonTheme>
      </S.HeaderContainer>
      <S.ContainerGlider>
        <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
          {isLoading ? (
            <Skeleton
              circle
              width={32}
              height={32}
              style={{ margin: "1rem" }}
            />
          ) : (
            <ArrowCircleLeft
              ref={prev}
              size={32}
              color="#fcfcfc"
            />
          )}
        </SkeletonTheme>
        <GliderComponents prev={prev} next={next} arrayStream={arrayStream} streamType={streamType} />
        <SkeletonTheme baseColor="#2A2A2A" highlightColor="#4d4d4d">
          {isLoading ? (
            <Skeleton
              circle
              width={32}
              height={32}
              style={{ margin: "1rem" }}
            />
          ) : (
            <ArrowCircleRight
              ref={next}
              size={32}
              color="#fcfcfc"
            />
          )}
        </SkeletonTheme>
      </S.ContainerGlider>
    </S.ContainerSection>
  );
}
