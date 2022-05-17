import React from "react";
// import styled from "styled-components";
import Container from "@mui/material/Container";
import backgroundImage from "../../img/background_for_form.jpg";

const css = `
.container_background_img{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-image: url(${backgroundImage});
    background-size: cover;;
    background-position: center;
    background-repeat: no-repeat;
    height: 650px;
}
.css-m2fw4i-MuiContainer-root {
    padding-left: 0px;
    padding-right: 0px;
}`;

// const BackgroundForm = styled.div`
//   position: absolute;
//   width: 100%;
//   border-radius: 30px 0 0 30px;
//   -webkit-backdrop-filter: blur(50px);
//   backdrop-filter: blur(50px);
//   top: 0;
//   left: 0px;
//   width: calc(100% - 900px);
//   height: 100%;
//   background: rgba(0, 0, 0, 0.01);
// `;

export default function ContainerForForm() {
  return (
    <Container className="container_background_img" maxWidth="auto">
      <style type="text/css">{css}</style>
      {/* <BackgroundForm /> */}
    </Container>
  );
}
