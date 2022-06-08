import * as React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";

import "../MainForm/MainForm.css";

const css = `
.css-mgs850-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped:not(:first-of-type) {
  border-left: 1px solid;
  margin-left: 0px;
}

.css-j4p6el-MuiButtonBase-root-MuiToggleButton-root.Mui-selected {
  color: black;
  background-color: #f2e0ff;
}
.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
  top: 0px;
  padding: 0 4px;
  border-radius: unset;
  border-color: #4b0082;
  background-color: whitesmoke;
  height: 100%;
  z-index: 1;
}
.css-1laqsz7-MuiInputAdornment-root {
  z-index: 2;
}

.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
  font-family: "Roboto";
  font-size: 18px;
  color: black;
  padding-block: 13px 5px;
  padding-right: 1px;
  z-index: 2;
}
.css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root {
  padding-left: 0px;
  padding-block: 12px 5px;
}
.css-195y93z-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
  background-color: #4b0082;
`;

export default function Data() {
  const [value, setValue] = React.useState(new Date());
  return (
    <div className="wrapper-input-name">
      <style type="text/css">{css}</style>
      <div className="form-input-name">
        <Typography mt={1} className="input-name__title">
          Date
        </Typography>
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            value={value}
            minDate={new Date("2021-01-01")}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
