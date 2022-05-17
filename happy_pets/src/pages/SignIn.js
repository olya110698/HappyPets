import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { withStyles } from "@material-ui/styles";
import { useGoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/background_for_form.jpg";
import googleIcon from "../img/google_icon.png";
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
    fontSize: "15px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "30px",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <Button {...props} />);

const CustomGoogleButton = withStyles({
  root: {
    background: "#184DCB",
    "&:hover": {
      backgroundColor: "#1C7ED3",
    },
    borderRadius: 14,
    border: 0,
    color: "#FAFAFA;",
    width: "250px",
    height: "56px",
    fontSize: "15px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "30px",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <Button {...props} />);

const css = `
.background_image{
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
    flex-basis: 50%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 70%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
  .google_icon{
    width:30px;
    height:auto;
    margin-right:10px
}`;

const MainContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const InputsContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  flex-direction: column;
  flex-basis: 0px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  gap: 4ch;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderInputs = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: #4b0082;
  font-size: 30px;
`;
const clientId =
  "471314938201-to7irpgig8e7fv8ikn6oavu14ldicg9d.apps.googleusercontent.com";
export default function SignUp() {
  const history = useNavigate();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    history.push("/about_us ");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });
  return (
    <>
      <HeaderApp />
      <MainContainer>
        <style type="text/css">{css}</style>
        <img
          className="background_image"
          alt="background"
          src={backgroundImage}
        />
        <InputsContainer>
          <HeaderInputs>Sign In</HeaderInputs>
          <TextField id="filled-basic" label="Name" variant="filled" />
          <TextField id="filled-basic" label="Password" variant="filled" />
          <CustomButton>SIGN IN</CustomButton>
          <CustomGoogleButton onClick={signIn}>
            <img className="google_icon" src={googleIcon} alt="icon_google" />
            SIGN IN WITH GOOGLE
          </CustomGoogleButton>
        </InputsContainer>
      </MainContainer>
    </>
  );
}
