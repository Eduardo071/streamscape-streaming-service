import styled from "styled-components";

export const Container = styled.div`
  min-height: 62vh;

  margin-top: 10vh;
  padding: 4rem 0 0 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    width: 80vw;
    height: 85vh;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    padding: 0 4rem 0 4rem;

    li {
      border: 2px solid #fff;
      border-radius: 12px;
      width: 38vw;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
      transition: 0.3s;

      &:hover{
        cursor: pointer;
        scale: 1.1;
      }

      header {
        margin-bottom: 3rem;

        p,
        span {
          font-size: 1.6rem;
        }

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
  p,
  h3,
  span {
    font-size: 1.6rem;
    text-align: justify;
    color: #fff;
  }

  .plus {
    border: 2px solid #fff;
    border-radius: 12px;
    width: 45vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;


    header {
      margin-bottom: 3rem;

      p,
      span {
        font-size: 1.6rem;
      }

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    p,
    h3,
    span {
      font-size: 1.8rem;
      text-align: justify;
      color: #fff;
    }
  }
`;
