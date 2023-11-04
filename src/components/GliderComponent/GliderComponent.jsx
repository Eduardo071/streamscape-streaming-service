import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import * as S from "../HomeStyle/HomeStyle";
import Skeleton from "react-loading-skeleton";
import {  post_path_500 } from "../../variables/variables";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function GliderComponents({ prev, next, arrayStream, streamType }) {
  const [isLoading, setIsLoading] = useState(true);
  const posterImages = useRef([]);

  useEffect(() => {
    const checkAllImagesLoaded = () => {
      const allImagesLoaded = posterImages.current.every(
        (image) => image.complete,
      );
      if (allImagesLoaded) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      }
    };

    if (isLoading) {
      checkAllImagesLoaded();
    }
  }, [isLoading]);

  return (
    <Glider
      hasArrows
      slidesToShow={6}
      slidesToScroll={5}
      arrows={{
        prev: prev.current,
        next: next.current,
      }}
    >
      {arrayStream.map((stream, index) => (
        <Link key={index} to={`/${streamType}/${stream.id}`}>
          <S.CardMovie>
            {isLoading ? (
              <>
                <Skeleton className="imageCardSkeleton" />
                <Skeleton count={2} className="titleCardSkeleton" />
              </>
            ) : (
              <>
                <LazyLoadImage
                  src={`${post_path_500}${stream.poster_path}`}
                  alt={`${streamType} poster`}
                  ref={(el) => (posterImages.current[index] = el)}
                  effect="blur"
                />
                <h1>
                  {stream.title ? stream.title : stream.name} (
                  {stream.release_date
                    ? stream.release_date.split("-")[0]
                    : stream.first_air_date}
                  )
                </h1>
              </>
            )}
          </S.CardMovie>
        </Link>
      ))}
    </Glider>
  );
}
