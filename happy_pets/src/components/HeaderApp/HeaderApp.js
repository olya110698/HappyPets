import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../Logo/Logo";

const css = `
.button{
  text-decoration: none;
  color: unset;
  font-size: 20px;
}

.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    border: 1px solid;
    text-transform: unset;
    margin-left: 100px;
}
.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    text-transform: unset;
}
.css-e53awj-MuiStack-root>:not(style)+:not(style) {
    margin-right: 16px; 
}
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: unset;
  width: 100%;
  height: 82px;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Link = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: unset;
  font-size: 20px;
  margin: 0px 5px 0px 70px;
`;

export default function HeaderApp() {
  return (
    <HeaderContainer>
      <style type="text/css">{css}</style>
      <Logo />
      <LinkContainer>
        <Link href="/about_us">About us</Link>
        <Link href="/adviсe">Adviсe</Link>
        <Link href="/our_services">Our services</Link>
        <Link href="/">+48 603 72 37 57</Link>
        <Stack spacing={2} direction="row">
          <Button href="/sign_in" variant="outlined" className="button">
            Sign in
          </Button>
          <Button href="/sign_up" variant="text" className="button">
            Sing up
          </Button>
        </Stack>
      </LinkContainer>
    </HeaderContainer>
  );
}

// url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /cover no-repeat fixed;
// <Link href="/about_us">Sing in</Link>/<Link to="/about_us">Sign up</Link>
