import React, { useState } from "react";

import { Coffee } from "../../Context/coffeeContext";
import { ModalEdit } from "./ModalEdit";
import { ModalView } from "./ModalView";

import * as S from "./styles";

type CoffeeModalType = "view" | "edit";

export interface CoffeeModalProps {
  onClose: () => void;
  coffee: Coffee;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({
  onClose,
  coffee,
}) => {
  const [modalType, setModalType] = useState<CoffeeModalType>("view");

  const handleChangeToEditView = () => {
    setModalType("edit");
  };

  return (
    <S.Container>
      <S.Board>
        {modalType === "view" ? (
          <ModalView
            coffee={coffee}
            onClose={onClose}
            handleChangeToEditView={handleChangeToEditView}
          />
        ) : (
          <ModalEdit coffee={coffee} onClose={onClose} />
        )}
      </S.Board>
    </S.Container>
  );
};
