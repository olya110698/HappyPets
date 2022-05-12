import React from "react";
import styled from "styled-components";
import HeaderApp from "../components/HeaderApp/HeaderApp";
import ContainerForForm from "../components/ContainerForForm/ContainerForForm";

const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export default function StartPage() {
  return (
    <WrapperContainer>
      <HeaderApp />
      <ContainerForForm />
    </WrapperContainer>
  );
}
