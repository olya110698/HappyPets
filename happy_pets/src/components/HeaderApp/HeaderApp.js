import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  display: flex;
  background: url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /
    cover no-repeat fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export default function HeaderApp() {
  return (
    <WrapperContainer>
      <h1>Hi!</h1>
    </WrapperContainer>
  );
}
