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
  padding: 0 4rem;
  flex-wrap: wrap;
  gap: 2rem;
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

  &:hover{
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

  &:hover{
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

span:last-child{
    width: 6rem;
}
`;
