import styled from "styled-components";

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
