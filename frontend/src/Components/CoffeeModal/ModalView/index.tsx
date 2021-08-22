import React from "react";
import { CoffeeModalProps } from "..";

import * as S from "./styles";

import { CgClose } from "react-icons/cg";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useCoffeeContext } from "../../../Context/coffeeContext";

interface ModalViewProps extends CoffeeModalProps {
  handleChangeToEditView: () => void;
}

export const ModalView: React.FC<ModalViewProps> = ({
  coffee,
  onClose,
  handleChangeToEditView,
}) => {
  const { deleteCoffee } = useCoffeeContext();
  return (
    <React.Fragment>
      <S.BoadHeader>
        <S.Title>{coffee.name}</S.Title>
        <span onClick={() => onClose()}>
          <CgClose size={30} />
        </span>
      </S.BoadHeader>
      <S.BoardDescription>{coffee.description}</S.BoardDescription>
      <S.Footer>
        <span className="edit" onClick={() => handleChangeToEditView()}>
          <MdModeEdit size={30} />
        </span>
        <span className="delete" onClick={() => deleteCoffee(coffee.id)}>
          <MdDelete size={30} />
        </span>
      </S.Footer>
    </React.Fragment>
  );
};
