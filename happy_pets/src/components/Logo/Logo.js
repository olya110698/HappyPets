import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const LogoImg = styled.img`
  display: flex;
  align-items: center;
  width: 150px;
  height: 70px;
  margin-left: 2px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg src="/logo.jpg" className="logo" alt="" />
      </Link>
    </LogoContainer>
  );
}
