import React from "react";
import styled from "styled-components";
import "./HeaderApp.css";
import { withStyles } from "@material-ui/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "../Logo/Logo";

const css = `
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

const Buttons = withStyles({
  root: {
    background: "unset",
    "&:hover": {
      backgroundColor: "#4b0082",
      borderColor: "unset",
    },
    border: 0,
    color: "black",
    width: "150px",
    height: "56px",
    fontSize: "20px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "30px",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <Button {...props} />);

export default function HeaderApp() {
  return (
    <div>
      <div className="header-container">
        {/* <HeaderContainer> */}
        <style type="text/css">{css}</style>
        <Logo />
        <LinkContainer>
          <Link href="/about_us">About us</Link>
          <Link href="/adviсe">Adviсe</Link>
          <Link href="/our_services">Our services</Link>
          <Link href="/">+48 603 72 37 57</Link>
          <Stack spacing={2} direction="row">
            <Buttons href="/sign_in" variant="outlined">
              Sign in
            </Buttons>
            <Buttons href="/sign_up" variant="text">
              Sing up
            </Buttons>
          </Stack>
        </LinkContainer>
        {/* </HeaderContainer> */}
      </div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/about_us">
              About us
            </a>
          </li>
          <li>
            <a className="menu__item" href="/adviсe">
              Adviсe
            </a>
          </li>
          <li>
            <a className="menu__item" href="/our_services">
              Our services
            </a>
          </li>
          <li>
            <a className="menu__item" href="/">
              +48 603 72 37 57
            </a>
          </li>
          <li>
            <a className="menu__item" href="/sign_in">
              Sign in
            </a>
          </li>
          <li>
            <a className="menu__item" href="/sign_up">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
