import React from "react";
import { CoffeesList } from "../Components/CoffeesList";
import { Register } from "../Components/Register";

import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.ContainerHomePage>
      <Register />

      <CoffeesList />
    </S.ContainerHomePage>
  );
};
