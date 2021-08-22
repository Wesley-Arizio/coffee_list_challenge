import React, { useState } from "react";
import { Coffee } from "../../Context/coffeeContext";
import { CoffeeModal } from "../CoffeeModal";

import * as S from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <S.Container onClick={() => handleModal()}>
        <S.CoffeeImagePreview src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqSeLYrRmuDySyBVIgsv8ejAfTt0b4BqF3w&usqp=CAU" />
        <S.ContainerTitle>
          <S.Title>{coffee.name}</S.Title>
        </S.ContainerTitle>
      </S.Container>

      {isModalOpen && <CoffeeModal onClose={handleModal} coffee={coffee} />}
    </>
  );
};
