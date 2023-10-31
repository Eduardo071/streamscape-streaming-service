import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 50vh;
  margin-top: 10rem;
`;

export const ContainerOfStreams = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-wrap: wrap;
  gap: 5rem;
`;

export const Paginator = styled.footer`
  display: flex;
  width: 100%;
  padding: 2rem 4rem;
  justify-content: space-between;
  align-items: center;
`;

export const PreviousPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  border: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

export const NextPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  border: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

export const ActualPage = styled.span`
  font-size: 1.8rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    width: 2.5rem;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border: solid;
    border-radius: 0.2rem;
    font-weight: bold;
  }

  span:last-child {
    width: 6rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

export const ImagePost = styled.img`
  width: 22rem;
  border-radius: 0.5rem;
`;

export const StreamTitle = styled.h1`
  font-size: 1.6rem;
  color: #fff;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 20ch;
  white-space: nowrap;
`;

export const ContainerNoStreams = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 12vh;
  margin-bottom: 40vh;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: #fff;
  }
`;

export const SearchBox = styled.section`
  width: 100vw;
  min-height: 10vh;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    width: 100vw;
    height: 10vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.8rem;

    input{
      width: 70vw;
      height: 10vh;
      font-size: 2.5rem;
      outline-style: none;
      padding-left: 2rem;
      border-radius: 2rem;
      border: none;
      color: #0A0A0A;
      font-weight: bold;
      font-style: italic;
    }
  }
`;
