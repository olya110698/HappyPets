import * as React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import cities from "./cities.json";

import "../MainForm/MainForm.css";

const css = `
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    z-index: 2;
}
.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    z-index: 2;
    padding-block: 4px 5px;
}

.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-block: 15px 6px;
}

`;

export default function Address() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="wrapper-input-name">
      <style type="text/css">{css}</style>
      <div className="form-input-name">
        <Typography mt={1} className="input-name__title">
          Address
        </Typography>
      </div>

      <TextField
        id="outlined-select-currency"
        select
        value={currency}
        onChange={handleChange}
      >
        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
