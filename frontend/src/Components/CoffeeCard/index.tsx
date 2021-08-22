import React, { useState } from "react";
import { CoffeeModal } from "../CoffeeModal";

import * as S from "./styles";

interface CoffeeCardProps {
  id: string;
  name: string;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <S.Container onClick={() => handleModal()}>
        <S.CoffeeImagePreview src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqSeLYrRmuDySyBVIgsv8ejAfTt0b4BqF3w&usqp=CAU" />
        <S.ContainerTitle>
          <S.Title>{name}</S.Title>
        </S.ContainerTitle>
      </S.Container>

      {isModalOpen && <CoffeeModal onClose={handleModal} />}
    </>
  );
};
