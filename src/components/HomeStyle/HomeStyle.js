import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  width: 100vw;
  background-color: #191919;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const MenuOptions = styled.ul`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-top: 0.5rem;

  li {
    button {
      background: none;
      border: none;
      transition: 0.2s;

      &:hover {
        scale: 1.1;
        cursor: pointer;
      }
    }
  }
`;
