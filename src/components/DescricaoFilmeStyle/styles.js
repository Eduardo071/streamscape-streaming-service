import styled from "styled-components";

export const InfoFilmeContainer = styled.section`
  color: white;
  background: #000000;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  section:first-child{
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      width: 60rem;
    }

    h2{
      color: white;
      font-size: 3.5rem;
    }
  }

  section:last-child{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap: 3.0rem;
    width: 60.0rem;
    margin-left: 2rem;
    margin-top: 6.8rem;
    font-size: 2.2rem;

    div,p, span{
      font-size: 1.5rem;
    }

    .info-filme{
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      color: #B9B9B9;

      p:last-child{
        display: flex;
        align-items: center;

        .imdb{
          span:first-child{
          font-weight: 700;
          font-size: 1.2rem;
          padding: 2px;
          border-radius: 2px;
          margin-left: 12px;
          border: 1px solid #fff;
          color: #fff;
          }

          span{
            display: inline-block;
            border: none;
            margin-left: 8px;
            font-weight: 700;
          }
        }
      }
    }

    .info-producao{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      p{
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.4rem;

        span{
          font-size: 1.4rem;
          margin-left: 12px;
          text-transform: none;
          color: #B9B9B9;
        }
      }
    }
  }
`

export const MidiaFilmeContainer = styled.section`
  padding: 0 4rem;
  min-height: 500px;
  background-color: #191919;
  color: #fff;
  button, div, span{
    font-size: 1.6rem;
  }

  .filmes-fotos-videos{
    margin: 9rem auto;
    
    header{
      display: flex;
      gap: 1.6rem;

      button{
        background: transparent;
        color: white;
        border: none;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        display: flex;
        align-items: center;
        font-size: 1.78rem;
        cursor: pointer;

        &:hover{
          border-bottom-color: #B9B9B9 ;
        }
      }
    }
  }
`

export const AvaliacaoContainer = styled.section`
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;

  div:first-child{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span{
      font-size: 1.6rem;
      opacity: 0.9;
    }
    
    .star{
      cursor: pointer;
      transition: all 0.2s;
    }

    .star:hover{
     transform: scale(1.1);
      color: #a79520;
    }
  }

  .watchLater{
    display: flex;
    align-items: center;
    gap: 8px;

    svg{
      cursor: pointer;
      transition: all 0.1s;
    }

    svg:hover{
      transform: scale(1.1);
      font-weight: 900;
      color: #a79520;
    }
  }
`