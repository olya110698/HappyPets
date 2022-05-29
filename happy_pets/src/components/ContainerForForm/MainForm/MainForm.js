import * as React from "react";
import { FormLabel } from "@mui/material";
import LookingForForm from "../LookingForForm/LookingForForm";
import ChoiceTheServiceForm from "../ChoiceTheServiceForm/ChoiceTheServiceForm";

import "./MainForm.css";

export default function MainForm() {
  return (
    <FormLabel id="w0" className="form-send" action="/site/filter" method="get">
      <div className="row">
        <div className="col-xs-12">
          <LookingForForm />
          <ChoiceTheServiceForm />
        </div>
      </div>
    </FormLabel>
  );
}
