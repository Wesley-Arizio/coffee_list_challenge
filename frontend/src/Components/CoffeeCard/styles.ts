import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 350px;
  margin: 20px;

  display: flex;
  border-radius: 30px;
  flex-direction: column;

  cursor: pointer;
`;

export const CoffeeImagePreview = styled.img`
  flex: 5;
`;

export const ContainerTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c64b1;
`;

export const Title = styled.h2`
  color: #fff;
`;
