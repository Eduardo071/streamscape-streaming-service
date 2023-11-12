import styled from "styled-components";

export const InfoFilmeContainer = styled.section`
  color: white;
  background: #000000;
  padding: 2rem;
  margin-top: 7.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  section:first-child {
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .PosterImageSkeleton {
      width: 80rem;
      height: 45rem;
    }
    .PosterTitleSkeleton {
      width: 65rem;
      height: 3rem;
      margin-top: 1rem;
    }

    .movieNoBackdropImage {
      width: 73rem;
      height: 45rem;
      border: solid 4px #000033;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        color: #fff;
        font-size: 4rem;
        font-weight: bold;
      }
    }

    .posterMovie {
      width: 80rem;
    }

    h2 {
      color: white;
      font-size: 3rem;
    }
  }

  section:last-child {
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 3rem;
    width: 60rem;
    margin-left: 2rem;
    margin-top: 1rem;
    font-size: 2.2rem;

    p {
      font-size: 1.5rem;

      .classificationSkeleton {
        width: 28rem;
      }

      .genresSkeleton {
        width: 5rem;
        margin-left: 0.3rem;
      }
    }

    div,
    span {
      font-size: 1.5rem;
    }

    .info-filme {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      color: #b9b9b9;

      .generos-filme {
        display: flex;
        align-items: center;
      }
      .containerImdb {
        display: flex;
        gap: 1rem;
        .imdb {
          font-weight: 700;
          font-size: 1.2rem;
          padding: 2px;
          border-radius: 2px;
          margin-left: 12px;
          border: 1px solid #fff;
          color: #fff;
        }

        .voteAvg {
          font-weight: 700;
        }
      }
    }

    .info-producao {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      p {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.4rem;

        span {
          font-size: 1.4rem;
          margin-left: 12px;
          text-transform: none;
          color: #b9b9b9;
        }
      }
    }
  }
`;

export const MidiaFilmeContainer = styled.section`
  padding: 0 4rem;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191919;
  color: #fff;
  button,
  div,
  span {
    font-size: 1.6rem;
  }
  .trailer,
  .trailerSkeleton {
    border-radius: 1.6rem;
    margin-top: 8rem;
    width: 90rem;
    height: 50rem;
  }
`;

export const MidiaFilmeContainerNoTrailer = styled.section`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-self: center;

  .noText {
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: end;
    color: #fff;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const CollectionStreamsContainer = styled.section`
  display: flex;
  align-self: center;
  width: 100vw;
  min-height: 60rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  min-height: 50rem;
  flex-wrap: wrap;
  background-color: #191919;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin: 2rem;
    transition: 0.3s;
    overflow: hidden;
    width: 25rem;
    text-align: center;

    &:hover {
      cursor: pointer;
      scale: 1.02;
    }

    img,
    .imageMovieCollectionSkeleton {
      width: 20rem;
      height: 30rem;
      border-radius: 1rem;
    }

    .titleMovieCollectionSkeleton {
      width: 15rem;
      height: 2rem;
    }

    .noImage {
      width: 20rem;
      height: 30rem;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: solid;

      h1 {
        font-size: 1.8rem;
        flex-wrap: wrap;
        color: #fff;
        font-weight: bold;
      }
    }

    h1 {
      font-size: 1.4rem;
      flex-wrap: wrap;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ButtonPlayerStream = styled.button`
  display: flex;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 20rem;
  height: 5rem;
  font-size: 2.5rem;
  font-weight: 500;
  border: none;
  border-radius: 0.8rem;
  transition: 0.3s;

  &:hover{
    cursor: pointer;
    scale: 1.05;
  }

`;
