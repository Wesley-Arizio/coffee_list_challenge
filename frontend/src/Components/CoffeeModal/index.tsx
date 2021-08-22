import React from "react";

import { CgClose } from "react-icons/cg";
import { Coffee } from "../../Context/coffeeContext";

import * as S from "./styles";

interface CoffeeModalProps {
  onClose: () => void;
  coffee: Coffee;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({
  onClose,
  coffee,
}) => {
  return (
    <S.Container>
      <S.Board>
        <S.BoadHeader>
          <S.Title>{coffee.name}</S.Title>
          <span onClick={() => onClose()}>
            <CgClose size={30} />
          </span>
        </S.BoadHeader>
        <S.BoardDescription>{coffee.description}</S.BoardDescription>
      </S.Board>
    </S.Container>
  );
};
