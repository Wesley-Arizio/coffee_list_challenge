import React from "react";
import { useCoffeeContext } from "../../Context/coffeeContext";
import { CoffeeCard } from "../CoffeeCard";

import * as S from "./styles";

interface CoffeeListProps {
  isSideBarOpen: boolean;
}

export const CoffeesList: React.FC<CoffeeListProps> = ({ isSideBarOpen }) => {
  const { isLoading, error, coffees } = useCoffeeContext();

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <S.Container isSideBarOpen={isSideBarOpen}>
      {coffees.map((item) => (
        <CoffeeCard key={item.id} coffee={item} />
      ))}
    </S.Container>
  );
};
