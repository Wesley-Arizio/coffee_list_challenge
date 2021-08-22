import React from "react";

import { CgClose } from "react-icons/cg";

import * as S from "./styles";

interface CoffeeModalProps {
  onClose: () => void;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({ onClose }) => {
  return (
    <S.Container>
      <S.Board>
        <S.BoadHeader>
          <S.Title>What is Lorem Ipsum?</S.Title>
          <span onClick={() => onClose()}>
            <CgClose size={30} />
          </span>
        </S.BoadHeader>
        <S.BoardDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </S.BoardDescription>
      </S.Board>
    </S.Container>
  );
};
