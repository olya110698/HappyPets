import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadContainer = styled.div`
  display: flex;
  background: url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /
    cover no-repeat fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export default function StartPage() {
  return (
    <>
      <HeadContainer>
        <h1>Hi!</h1>
      </HeadContainer>
    </>
  );
}
