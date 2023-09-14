import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #1a1a1a;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100vw;
  height: 10vh;
  background-color: #191919;
`;

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 0.5rem;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-weight: 500;
    transition: 0.3s;
    font-size: 1.7rem;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const MenuOptions = styled.ul`
  display: flex;
  gap: 1.5rem;
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
  background: linear-gradient(to right, black, transparent);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: left;
  padding-bottom: 10rem;
  position: relative;
`;

export const HeroGradientOverlay = styled.div`
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
`;

export const DescFilme = styled.section`
  width: 45vw;
  margin-left: 6rem;
  gap: 0.8rem;
  z-index: 1;

  h1 {
    color: #ffffff;
    font-size: 10rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 20ch;
    white-space: nowrap;
  }

  p {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: justify;

    max-height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  h3 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 500;
    text-align: justify;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.8rem;
  }
`;

export const NavBarFilme = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 5rem;
  margin-top: 3rem;
  z-index: 1;
  height: 6.4rem;

  button {
    border-radius: 50%;
    padding: 1.2rem;
    border-style: none;
    background: rgb(102, 51, 102);
    background: linear-gradient(
      rgba(102, 51, 102, 1) 0%,
      rgba(153, 0, 0, 1) 100%
    );
    transition: 0.5s;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;

export const ContainerUpcoming = styled.section`
  display: flex;
  flex-direction: column;
  width: 95vw;
  gap: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 87vw;
  margin-right: 1.5vw;
  h2 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const ContainerGlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  svg {
    transition: 0.4s;
    &:hover {
      cursor: pointer;
      scale: 1.05;
    }
  }
`;

export const CardMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 2rem;
  align-self: baseline;
  transition: 0.3s;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`;
