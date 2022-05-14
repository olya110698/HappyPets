import React from "react";
import "./SignUp.css";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { withStyles } from "@material-ui/styles";
import image from "../img/background_for_form.jpg";
import HeaderApp from "../components/HeaderApp/HeaderApp";

const CustomButton = withStyles({
  root: {
    background: "#4b0082",
    "&:hover": {
      backgroundColor: "#9932CC",
    },
    borderRadius: 14,
    border: 0,
    color: "#FAFAFA;",
    width: "250px",
    height: "56px",
    fontSize: "20px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "30px",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <Button {...props} />);

const css = `
.background_image{
   width:1200px;
   height:100%;
}`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 900px;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 1700px;
`;

const HeaderInputs = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: #4b0082;
  font-size: 30px;
`;

export default function SignUp() {
  return (
    <>
      <HeaderApp />
      <MainContainer>
        <style type="text/css">{css}</style>
        <img className="background_image" alt="background" src={image} />
        <InputsContainer>
          <HeaderInputs>Sign Up</HeaderInputs>
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField id="filled-basic" label="Full name" variant="filled" />
          <TextField id="filled-basic" label="Password" variant="filled" />
          <TextField
            id="filled-basic"
            label="Confirm password"
            variant="filled"
          />
          <CustomButton>Sign Up</CustomButton>
        </InputsContainer>
      </MainContainer>
    </>
  );
}
