import React from "react";

import * as S from "./styles";

interface RegisterProps {
  showSideBar: boolean;
}

export const Register: React.FC<RegisterProps> = ({ showSideBar }) => {
  return (
    <S.Container className={!showSideBar ? "hidden" : "active"}>
      <S.Title>Register a new coffee</S.Title>
      <S.Form>
        <S.Input type="text" placeholder="Drink's name" />
        <S.TextArea placeholder="Drink's description" />
        <S.InputSubmit type="submit" value="SEND" />
      </S.Form>
    </S.Container>
  );
};
