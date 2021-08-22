import React, { FormEvent, useState } from "react";
import { useCoffeeContext } from "../../Context/coffeeContext";

import * as S from "./styles";

interface RegisterProps {
  showSideBar: boolean;
}

export const Register: React.FC<RegisterProps> = ({ showSideBar }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { saveCoffee } = useCoffeeContext();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const data = {
      name,
      description,
    };

    await saveCoffee(data);
    setName("");
    setDescription("");
  };

  return (
    <S.Container className={!showSideBar ? "hidden" : "active"}>
      <S.Title>Register a new coffee</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Drink's name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <S.TextArea
          placeholder="Drink's description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <S.InputSubmit type="submit" value="SEND" />
      </S.Form>
    </S.Container>
  );
};
