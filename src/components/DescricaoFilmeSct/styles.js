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
      width: 35rem;
    }

    h2{
      color: white;
      font-size: 2.5rem;
    }
  }

  section:last-child{
    margin-top: 2.8rem;
  }
`