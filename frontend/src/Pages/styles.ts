import styled from "styled-components";

export const ContainerHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(60, 100, 177, 0.06);

  display: flex;
  flex-direction: row;
`;

export const FixedTopBar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #3c64b1;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  & span {
    position: absolute;
    left: 20px;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;
