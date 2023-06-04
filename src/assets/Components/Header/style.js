import { styled } from "styled-components";

export const HeaderS = styled.header`
  display: flex;
  background: #323232b2;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  position: fixed;
  width: 100vw;
  color: #dedede;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 300px;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 630px) {
    align-items: center;
    flex-direction: column;
    height: 110px;
    padding: 0px;
    position: initial;
  }
`;
