import styled from "styled-components";

export const Container = styled.div`
  min-height: 62vh;

  margin-top: 10vh;
  padding: 4rem 0 0 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h3{
    font-size: 1.8rem;
    font-weight: 600;
  }

  ul{
    margin-top: 4.8rem;
    display: grid;
    grid-template-columns: repeat(3, 27rem);
    grid-template-rows: 1fr;
    column-gap: 5rem;
    padding: 0 4rem 0 4rem;

    li{
      border: 2px solid #fff;
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;

      header {
        margin-bottom: 3rem;

        p, span{
          font-size: 1.6rem;
        }

        p:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 9rem;
        font-size: 4rem;
        font-weight: 700;

        span{
          display: block;
          margin: 0;
          font-size: 1.8rem;
        }
        } 
      
        span{
          margin-left: 8rem;
          margin-top: -20px;
          font-size: 4rem;
          display: block;
        }

        p:last-child{
          margin-left: 11rem;
          font-size: 2.2rem;
        }
      }

      
    }
  }





  p, h3, span{
    font-size: 1.6rem;
    color: #fff;
  }
`