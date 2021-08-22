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

export const BoadHeader = styled.header`
  flex: 1;

  display: flex;
  align-content: center;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.3px;
  color: #000;
  transition: 0.4s;
`;

export const BoardDescription = styled.main`
  flex: 3;
  display: flex;
  align-content: center;
  justify-content: space-between;

  text-align: justify;

  margin-top: 20px;

  font-family: Mulish;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.3px;
  color: #000;
  transition: 0.4s;
`;

export const Footer = styled.footer`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 50px;

  span {
    margin: 0 10px;
    cursor: pointer;
  }

  span + span {
    margin-right: 0;
  }
`;
