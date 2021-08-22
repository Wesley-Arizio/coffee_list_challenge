import React from "react";
import { CoffeeCard } from "../CoffeeCard";

import * as S from "./styles";

interface CoffeeListProps {
  isSideBarOpen: boolean;
}

export const CoffeesList: React.FC<CoffeeListProps> = ({ isSideBarOpen }) => {
  return (
    <S.Container isSideBarOpen={isSideBarOpen}>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </S.Container>
  );
};
