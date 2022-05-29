import React from "react";
import Container from "@mui/material/Container";
import backgroundImage from "../../img/background_for_form.jpg";
import SimpleBottomNavigation from "./SimpleBottomNavigation";

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

export default function ContainerForForm() {
  return (
    <Container className="container_background_img" maxWidth="auto">
      <style type="text/css">{css}</style>
      <SimpleBottomNavigation />
    </Container>
  );
}
