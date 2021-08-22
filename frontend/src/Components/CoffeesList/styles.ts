import styled from "styled-components";

interface ContainerProps {
  isSideBarOpen: boolean;
}

export const Container = styled.main<ContainerProps>`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 30px 0;
  overflow-y: scroll;
  margin-left: ${({ isSideBarOpen }) => (isSideBarOpen ? 0 : "-30px")};
  margin-bottom: 30px;

  @media (max-width: 1280px) {
    flex: ${({ isSideBarOpen }) => (isSideBarOpen ? 0 : 3)};
  }
`;
