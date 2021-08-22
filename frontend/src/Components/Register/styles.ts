import styled from "styled-components";

export const Container = styled.main`
  flex: 1;

  background-color: #3c64b1;
  padding: 20px 20px;
  border: none;
`;

export const Form = styled.form`
  height: 90%;
  margin-top: 50px;

  position: relative;
`;

export const Title = styled.h1`
  height: 10%;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #fff;
  transition: 0.4s;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fff;

  font-family: Mulish;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #737b7d;
  border: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;

  font-family: Mulish;
  padding: 5px 16px;
  font-size: 14px;
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
  background: #fff;

  font-family: Mulish;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #737b7d;
  border: none;

  position: absolute;

  bottom: 60px;
  right: 0;
  cursor: pointer;
`;
