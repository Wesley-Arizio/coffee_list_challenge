import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    padding: 20px;
    overflow: scroll;
    display: block;
  }
`;

export const Board = styled.main`
  width: 80%;
  max-width: 1500px;
  min-height: 200px;

  background-color: #fff;

  border-radius: 30px;

  padding: 30px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;
