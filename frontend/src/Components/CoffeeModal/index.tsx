import React from "react";

import { CgClose } from "react-icons/cg";
import { Coffee, useCoffeeContext } from "../../Context/coffeeContext";

import { MdModeEdit, MdDelete } from "react-icons/md";
import * as S from "./styles";

interface CoffeeModalProps {
  onClose: () => void;
  coffee: Coffee;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({
  onClose,
  coffee,
}) => {
  const { deleteCoffee } = useCoffeeContext();

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
        <S.Footer>
          <span className="edit">
            <MdModeEdit size={30} />
          </span>
          <span className="delete" onClick={() => deleteCoffee(coffee.id)}>
            <MdDelete size={30} />
          </span>
        </S.Footer>
      </S.Board>
    </S.Container>
  );
};
