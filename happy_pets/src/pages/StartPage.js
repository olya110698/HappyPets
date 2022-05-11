import React from "react";
import styled from "styled-components";
import HeaderApp from "../components/HeaderApp/HeaderApp";

const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export default function StartPage() {
  return (
    <WrapperContainer>
      <HeaderApp />
    </WrapperContainer>
  );
}
