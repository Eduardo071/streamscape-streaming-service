import styled from "styled-components";

export const Container = styled.div`
  min-height: 62vh;

  margin-top: 13vh;
  padding: 0 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    width: 100vw;
    height: 82vh;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    padding: 0 4rem 0 4rem;

    li {
      border: 2px solid #fff;
      border-radius: 12px;
      width: 42vw;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }

      header {
        margin-bottom: 3rem;

        p,
        span {
          font-size: 2rem;
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
    font-size: 4rem;
    text-align: justify;
    color: #fff;
  }

  .plus {
    border: 2px solid #fff;
    border-radius: 12px;
    width: 55vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    flex-direction: column;
    padding: 2rem;

    header {
      margin-bottom: 3rem;

      p,
      span {
        font-size: 3rem;
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
  .containerTopics{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem;

    p{
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      
      span{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;

