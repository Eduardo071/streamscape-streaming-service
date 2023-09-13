import styled from "styled-components";

export const InfoFilmeContainer = styled.main`
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
    border: 1px solid white;
    margin-top: 2.8rem;
    font-size: 2.2rem;

    div{
      font-size: 1.8rem;
      color: red;
    }
  }
`