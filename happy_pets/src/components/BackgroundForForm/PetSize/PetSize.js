import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";

import "../MainForm/MainForm.css";

const CustomToggleButton = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    borderColor: "#4b0082",
    lineHeight: 1,
    padding: 4,
    margin: 4,
    textTransform: "unset",
    borderRadius: 1,
    color: "black",
    fontSize: "16px",
    marginLeft: "0px",
    marginRight: "0px",
    width: "50%",
  },
  typography: { fontFamily: "Roboto" },
})((props) => <ToggleButton {...props} />);

const css = `
.css-mgs850-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type) {
  border-left: 1px solid;
  margin-left: 0px;
}

.css-j4p6el-MuiButtonBase-root-MuiToggleButton-root.Mui-selected {
  color: black;
  background-color: #f2e0ff;
}

.css-mgs850-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type) {
    border-left: 1px solid;
}
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export default function PetSize() {
  const [choiceSize, setSize] = React.useState("web");

  const handleChange = (event, newSize) => {
    setSize(newSize);
  };
  return (
    <div className="wrapper-input-name">
      <style type="text/css">{css}</style>
      <div className="form-input-name">
        <Typography mt={1} className="input-name__title">
          Pet size
        </Typography>
      </div>
      <WrapperContainer>
        <ToggleButtonGroup
          className="input-name__button-group"
          color="primary"
          value={choiceSize}
          exclusive
          onChange={handleChange}
          fullWidth="true"
        >
          <CustomToggleButton value="5kg">
            Up to <br />5 kg
          </CustomToggleButton>
          <CustomToggleButton value="20kg">
            Up to <br />
            20 kg
          </CustomToggleButton>

          <CustomToggleButton value="40kg">
            Up to <br />
            40 kg
          </CustomToggleButton>
          <CustomToggleButton value="40kg+">
            40 kg <br />+
          </CustomToggleButton>
        </ToggleButtonGroup>
      </WrapperContainer>
    </div>
  );
}
