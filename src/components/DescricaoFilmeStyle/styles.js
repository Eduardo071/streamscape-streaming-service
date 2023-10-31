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

    img {
      width: 80rem;
    }

    h2 {
      color: white;
      font-size: 3.5rem;
    }
  }

  section:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 3rem;
    width: 60rem;
    margin-left: 2rem;
    margin-top: 3.2rem;
    font-size: 2.2rem;

    div,
    p,
    span {
      font-size: 1.5rem;
    }

    .info-filme {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      color: #b9b9b9;

      p:last-child {
        display: flex;
        align-items: center;

        .imdb {
          span:first-child {
            font-weight: 700;
            font-size: 1.2rem;
            padding: 2px;
            border-radius: 2px;
            margin-left: 12px;
            border: 1px solid #fff;
            color: #fff;
          }

          span {
            display: inline-block;
            border: none;
            margin-left: 8px;
            font-weight: 700;
          }
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

  .filmes-fotos-videos {
    margin: 9rem auto;

    header {
      display: flex;
      gap: 1.6rem;

      button {
        background: transparent;
        color: white;
        border: none;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        display: flex;
        align-items: center;
        font-size: 1.78rem;
        cursor: pointer;

        &:hover {
          border-bottom-color: #b9b9b9;
        }
      }
    }
  }

  .trailer {
    border-radius: 16px;
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
  height: 60rem;
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
    padding: 2rem;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      scale: 1.02;
    }

    img {
      width: 20rem;
      height: 30rem;
      border-radius: 1rem;
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
