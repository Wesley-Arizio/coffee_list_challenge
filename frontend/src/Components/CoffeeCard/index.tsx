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
        <S.CoffeeImagePreview src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?k=6&m=157528129&s=612x612&w=0&h=-Jm8OkpkDbTHIAXLuXaZ1_VUsz8_0B9okYWQJdgvnpI=" />
        <S.ContainerTitle>
          <S.Title>{coffee.name}</S.Title>
        </S.ContainerTitle>
      </S.Container>

      {isModalOpen && <CoffeeModal onClose={handleModal} coffee={coffee} />}
    </>
  );
};
