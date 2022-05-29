import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

import "../MainForm/MainForm.css";

export default function LookingForForm() {
  const [сhoice, setСhoice] = React.useState("web");

  const handleChange = (event, newСhoice) => {
    setСhoice(newСhoice);
  };
  return (
    <>
      <div className="form-input-name">
        <Typography mt={1} className="input-name__title">
          I am looking for a service for...
        </Typography>
      </div>

      <ToggleButtonGroup
        className="input-name__button-group"
        color="primary"
        value={сhoice}
        exclusive
        onChange={handleChange}
        fullWidth="true"
      >
        <ToggleButton value="dog">Dog</ToggleButton>
        <ToggleButton value="cat">Cat</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
