import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../Logo/Logo";

const css = `
.button{
  text-decoration: none;
  color: rebeccapurple;
  font-size: 20px;
  margin-right: 5px;
}
.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    border: 1px solid rebeccapurple;
    text-transform: unset;
}
.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    text-transform: unset;
}`;

const HeaderContainer = styled.header`
  display: flex;
  background: whitesmoke;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`;
const Link = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: rebeccapurple;
  font-size: 20px;
  margin-right: 5px;
`;

export default function HeaderApp() {
  return (
    <HeaderContainer>
      <style type="text/css">{css}</style>
      <Logo />
      <Link href="/about_us">About us</Link>
      <Link href="/about_us">Adviсe</Link>
      <Link href="/about_us">Our services</Link>
      <Link href="/about_us">+48 603 72 37 57</Link>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" className="button">
          Sign in
        </Button>
        <Button variant="text" className="button">
          Sing up
        </Button>
      </Stack>
    </HeaderContainer>
  );
}

// url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /cover no-repeat fixed;
// <Link href="/about_us">Sing in</Link>/<Link to="/about_us">Sign up</Link>
