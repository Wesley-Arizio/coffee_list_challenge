import React from "react";

import * as S from "./styles";

export const CoffeeCard: React.FC = () => {
  return (
    <S.Container>
      <S.CoffeeImagePreview src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqSeLYrRmuDySyBVIgsv8ejAfTt0b4BqF3w&usqp=CAU" />
      <S.ContainerTitle>
        <S.Title>Coffee</S.Title>
      </S.ContainerTitle>
    </S.Container>
  );
};
