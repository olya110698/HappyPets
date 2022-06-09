import React from "react";
import styled from "styled-components";
import HeaderApp from "../components/HeaderApp/HeaderApp";
import BackgroundForForm from "../components/BackgroundForForm/BackgroundForForm";

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
      <BackgroundForForm />
    </WrapperContainer>
  );
}
