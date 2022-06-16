import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import store from "../../../redux/configureStore";
import {
  kg5Form,
  kg20Form,
  kg40Form,
  kg40plusForm,
} from "../../../redux/actions/Form";

import "../MainForm/MainForm.css";

const CustomToggleButton = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f2e0ff",
    borderColor: "#4b0082",
    lineHeight: 1,
    padding: 4,
    margin: 4,
    textTransform: "unset",
    borderRadius: "14px !important",
    color: "black",
    fontSize: "16px",
    marginLeft: "0px",
    marginRight: "0px",
    width: "48%",
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
  background-color: whitesmoke;
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
  const [choiceSize, setSize] = React.useState("");

  // const dispatch = useDispatch();

  const handleChange = (event, newSize) => {
    if (newSize === "5kg") {
      store.dispatch(kg5Form());
    } else if (newSize === "20kg") {
      store.dispatch(kg20Form());
    } else if (newSize === "40kg") {
      store.dispatch(kg40Form());
    } else if (newSize === "40kg+") {
      store.dispatch(kg40plusForm());
    }
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
          fullWidth={true}
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
