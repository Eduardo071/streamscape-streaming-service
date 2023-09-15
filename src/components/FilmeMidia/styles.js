import styled from "styled-components";

export const VideosEFotos = styled.div` 
margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8px;

  img, iframe{
   max-width: 100%;
    height: 30.0rem;
    object-fit: cover;
    border-radius: 4px;
  }
`


