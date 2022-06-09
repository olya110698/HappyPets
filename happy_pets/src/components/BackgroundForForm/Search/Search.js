import * as React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FindReplace from "@mui/icons-material/FindReplace";
import { withStyles } from "@material-ui/styles";

import "../MainForm/MainForm.css";

const css = `

`;

const CustomButton = withStyles({
  root: {
    background: "#f2e0ff",
    borderColor: "#4b0082",
    borderRadius: 14,
    border: 0,
    marginBlockStart: 50,
    color: "black",
    width: "100%",
    height: "56px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#f2e0ff",
      borderColor: "#4b0082",
      boxShadow: "none",
      color: "black",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#f2e0ff",
      borderColor: "#4b0082",
      color: "black",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem #4b0082",
      color: "black",
    },
  },
  label: {
    textTransform: "capitalize",
    fontSize: "30px",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <Button {...props} />);

const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-inline: 0px;
  margin-block-end: -5px;
`;

export default function Search() {
  return (
    <div className="wrapper-input-name">
      <style type="text/css">{css}</style>
      <WrapperContainer>
        <CustomButton startIcon={<FindReplace />}>Search</CustomButton>
      </WrapperContainer>
    </div>
  );
}
