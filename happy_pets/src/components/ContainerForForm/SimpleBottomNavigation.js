import * as React from "react";
import {
  FormLabel,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import "./SimpleBottomNavigation.css";

export default function SimpleBottomNavigation() {
  const [selection, setSelection] = React.useState("web");

  const handleChange = (event, newSelection) => {
    setSelection(newSelection);
  };
  return (
    <FormLabel id="w0" className="form-send" action="/site/filter" method="get">
      <div className="row">
        <div className="col-xs-12">
          {/* Looking for start */}

          <div className="form-input-name">
            <Typography mt={1} className="input-name__title">
              I am looking for a service for...
            </Typography>
          </div>

          <ToggleButtonGroup
            className="input-name__button-group"
            color="primary"
            value={selection}
            exclusive
            onChange={handleChange}
            fullWidth="true"
          >
            <ToggleButton value="dog">Dog</ToggleButton>
            <ToggleButton value="cat">Cat</ToggleButton>
          </ToggleButtonGroup>

          {/* Looking for end */}
          {/* Service selection start */}

          <div className="form-input-name">
            <Typography mt={1} className="input-name__title">
              Service selection
            </Typography>
          </div>

          <ToggleButtonGroup
            className="input-name__button-group"
            color="primary"
            value={selection}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="dog">Dog</ToggleButton>
            <ToggleButton value="cat">Cat</ToggleButton>
          </ToggleButtonGroup>
          {/* Service selection end */}
        </div>
      </div>
    </FormLabel>
  );
}
