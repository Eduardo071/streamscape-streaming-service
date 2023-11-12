import styled from "styled-components";

export const Player = styled.iframe`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border: none;
  position: relative;
`;

export const Logo = styled.img`
  display: flex;
  width: 20rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  margin: 1rem 1rem;
`;
