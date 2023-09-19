import styled from "styled-components";

export const HeroProfile = styled.main`
  margin-top: 10vh;
  padding: 4rem 0 0 5rem;
  height: 62vh;
  display: flex;
  gap: 2rem;
  button {
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 3rem 5rem;
    font-size: 1.8rem;
    font-weight: 700;
    background: #060606;
    border: none;
    color: #fcfcfc;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        scale: 1.1;
    }
  }
`;
