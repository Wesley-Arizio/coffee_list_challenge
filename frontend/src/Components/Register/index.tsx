import React from "react";

import * as S from "./styles";

export const Register: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Register a new coffee</S.Title>
      <S.Form>
        <S.Input type="text" placeholder="Drink's name" />
        <S.TextArea placeholder="Drink's description" />
        <S.InputSubmit type="submit" value="SEND" />
      </S.Form>
    </S.Container>
  );
};
