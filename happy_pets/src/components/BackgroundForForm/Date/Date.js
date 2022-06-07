import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { withStyles } from "@material-ui/styles";

import "../MainForm/MainForm.css";

const CustomToggleButton = withStyles({
  root: {
    backgroundColor: "white",
    borderColor: "#4b0082",
    lineHeight: 1,
    padding: 8,
    marginBlock: 4,
    textTransform: "capitalize",
    borderRadius: 1,
    borderTopLeftRadius: 1,
    color: "black",
    fontSize: "16px",
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
`;

export default function ChoiceTheServiceForm() {
  const [choiceService, setChoiceService] = React.useState("web");

  const handleChange = (event, newChoiceService) => {
    setChoiceService(newChoiceService);
  };
  return (
    <div className="wrapper-input-name">
      <style type="text/css">{css}</style>
      <div className="form-input-name">
        <Typography mt={1} className="input-name__title">
          Date
        </Typography>
      </div>

      <ToggleButtonGroup
        className="input-name__button-group"
        color="primary"
        value={choiceService}
        exclusive
        onChange={handleChange}
        fullWidth="true"
      >
        <CustomToggleButton value="date">Overexposure</CustomToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
