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
  height: 10vh;
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

export const Hero = styled.main`
  width: 100vw;
  height: 90vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: left;
  padding-bottom: 4rem;
`;

export const DescFilme = styled.section`
  width: 38rem;
  margin-left: 6rem;
  gap: 0.8rem;

  h1 {
    color: #aaaaaa;
    font-size: 4rem;
    font-weight: bold;
    overflow-x: ellipsis;
  }

  p {
    color: #aaaaaa;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: justify;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const NavBarFilme = styled.nav`
  display: flex;
  gap: 1rem;
  margin-left: 6rem;
  margin-top: 3rem;
`;
