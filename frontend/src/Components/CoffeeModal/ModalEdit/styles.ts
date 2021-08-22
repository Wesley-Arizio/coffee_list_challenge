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

export const Form = styled.form`
  height: 90%;
  margin-top: 30px;

  position: relative;
`;

export const InputName = styled.input`
  width: 100%;
  height: 50px;
  background-color: rgba(60, 100, 177, 0.06);
  border: none;
  padding: 0 20px;

  font-family: Mulish;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #737b7d;
`;

export const InputDescription = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: rgba(60, 100, 177, 0.06);

  font-family: Mulish;
  padding: 5px 16px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #737b7d;
  border: none;

  margin-top: 25px;
  resize: vertical;
`;

export const InputSubmit = styled.input`
  width: 100%;
  height: 40px;
  background-color: #3c64b1;

  font-family: Mulish;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;
