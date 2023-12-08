import styled from "styled-components";

export const FormComponent = styled.form`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: solid 2px #000;
    position: relative;
    background-color: #fff;
    position: relative;

    label {
      position: absolute;
      bottom: 8px;
      left: 9px;
      z-index: 8;
      font-size: 1.7rem;
      font-style: italic;
      font-weight: bold;
      transition: 0.8s linear;

      &:active {
        bottom: 50px;
      }
      &:hover {
        cursor: text;
      }
    }

    &:focus-within {
      border: solid 2px #1e90ff;
    }

    .searchIcon {
      position: absolute;
      right: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const InputSearch = styled.input`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 1rem;
  width: 20rem;
  height: 4rem;
  font-size: 1.7rem;
  outline: none;
  border: none;
  background-color: transparent;
  font-style: italic;
  font-weight: bold;
`;
