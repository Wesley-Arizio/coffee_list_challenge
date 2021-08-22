import React, { FormEvent, useState } from "react";

import { CoffeeModalProps } from "..";

import { CgClose } from "react-icons/cg";

import * as S from "./styles";
import { useCoffeeContext } from "../../../Context/coffeeContext";

export const ModalEdit: React.FC<CoffeeModalProps> = ({ coffee, onClose }) => {
  const [name, setName] = useState(coffee.name);
  const [description, setDescription] = useState(coffee.description);

  const { updateCoffee } = useCoffeeContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      id: coffee.id,
      name,
      description,
    };

    await updateCoffee(data);
  };

  return (
    <React.Fragment>
      <S.BoadHeader>
        <S.Title>{coffee.name}</S.Title>
        <span onClick={() => onClose()}>
          <CgClose size={30} />
        </span>
      </S.BoadHeader>
      <S.Form onSubmit={handleSubmit}>
        <S.InputName
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.InputDescription
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <S.InputSubmit type="submit" value="SEND" />
      </S.Form>
    </React.Fragment>
  );
};
