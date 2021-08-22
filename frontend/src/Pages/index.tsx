import React, { useState } from "react";
import { CoffeesList } from "../Components/CoffeesList";
import { Register } from "../Components/Register";

import { CgMenu } from "react-icons/cg";

import * as S from "./styles";

export const Home: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <S.FixedTopBar>
        <span onClick={() => setShowSideBar(!showSideBar)}>
          <CgMenu size={30} />
        </span>
        Coffee List
      </S.FixedTopBar>
      <S.ContainerHomePage>
        <Register showSideBar={showSideBar} />

        <CoffeesList isSideBarOpen={showSideBar} />
      </S.ContainerHomePage>
    </>
  );
};
