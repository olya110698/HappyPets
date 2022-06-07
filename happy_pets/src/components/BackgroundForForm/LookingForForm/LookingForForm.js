import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { withStyles } from "@material-ui/styles";

import "../MainForm/MainForm.css";

const CustomToggleButton = withStyles({
  root: {
    backgroundColor: "white",
    borderColor: "#4b0082",
    padding: 8,
    lineHeight: 1,
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
          I am looking for a service for...
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
        <CustomToggleButton value="dog">
          <svg viewBox="0 0 500 450" width="22px" height="22px">
            <path
              d="M440.651,132.739c-0.888-2.354-2.721-4.229-5.054-5.171L396.39,111.75c-2.435-12.666-12.056-22.81-24.436-26.008
	l-2.115-24.363c-0.309-3.565-2.701-6.608-6.093-7.751c-3.391-1.142-7.137-0.167-9.541,2.484l-10.062,11.099l-6.22-21.766
	c-1.072-3.752-4.44-6.386-8.341-6.521c-3.924-0.139-7.444,2.258-8.773,5.928L274.34,173.047c0,0-172.127,8.035-172.199,8.039
	c-35.296,2.121-68.735-16.765-85.167-48.119c-2.309-4.402-7.748-6.102-12.149-3.794c-4.403,2.308-6.101,7.747-3.794,12.149
	c14.69,28.03,40.708,47.75,70.541,54.93c-3.097,3.609-9.751,12.554-13.642,26.617c-4.231,15.291-5.756,39.667,9.801,70.619
	L42.499,327.76c-1.474,2.001-2.054,4.523-1.603,6.968l11.105,60.218c0.787,4.268,4.51,7.367,8.851,7.367h11.312
	c2.669,0,5.2-1.185,6.911-3.233c1.71-2.05,2.422-4.753,1.944-7.378l-7.032-38.627l74.401-55.853c0.131-0.099-0.126,0.107,0,0
	c7.114-5.975,12.278-12.556,15.972-19.322c38.777,6.808,91.844,16.02,125.857,21.498l14.986,95.314
	c0.689,4.377,4.46,7.602,8.891,7.602h9.308c4.971,0,9-4.029,9-9V296.56c8.449-5.77,11.469-15.42,13.472-24.871
	c0.063-0.297,20.022-92.416,20.022-92.416c3.762,0.627,7.561,0.956,11.388,0.956c26.356,0,50.492-15.431,62.987-40.271
	C441.401,137.712,441.539,135.094,440.651,132.739z"
            />
          </svg>
          Dog
        </CustomToggleButton>
        <CustomToggleButton value="cat">
          <svg viewBox="0 0 300 300" width="22px" height="22px">
            <path
              d="M207.187,2.821c-2.4-2-6.6-3.9-10.7-2.1c-7.8,5.3,27.4,27,9.6,99.6c-3.7,15-12.8,7.2-23.6,3.9
			c-24.6-7.7-50.9-9.4-76.4-12.1c-9-1-18.2-1.7-26.9-4.1c-9.2-2.5-9.6-3-7.3-11.4c6.4-8.1,3.8-19.2,3.5-23.8
			c4.8-10.6,6.6-19.8,2.8-24.5c-10.3-12.2-12,19.4-25.4,19.5c-6.1-0.6-10.1-0.1-11.6-3.4c-2.7-5.7-6.9-13.1-12.3-16.6
			c-8.3-5.5-10,9.7-6.5,24.1c-1.1,8.8-0.3,14.8,4.2,21.2c2.3,3.2,2.8,7.2,3.5,11c1.3,6.6,2.1,14.8,2.1,21.5c0,3.8,0.7,15.6,1.3,19.4
			c2.8,17.2,3.7,20.6,16.6,33.2c5.4,5.3,13.6,9.9,17,17c2.5,5.4,4.7,11.3,7,16.7c4.5,10.4,7.3,21,9.2,32.1c1.1,6-13.2,7.3-10.8,15.6
			c1.9,6.8,20.1,6.7,21.2-1.1c0.7-4.4,2.8-12.4,3.8-18.5c5.3-22.9-2.5-31.8,3.6-52.6c1.6-7.5,30.9,7,34.9,9.7
			c8.1,5.5,16.8,9.9,25,15.2c12.7,8.2,3.9,15.4-4.3,22.1c-4.4,3.6-4.4,3.8-10,2.5c-4.6-0.9-8.2,1.9-9.2,5.2c-1.5,4.7,5.3,7.9,10,7.3
			c14.1-1.5,33.6-16.2,39.7-28.9c4.1,4.8,2.4,9.3,0.1,15.4c-1,2.6-2.1,5.1-3,7.7c-2,5.9-3.9,4.3-8.7,5.4c-7.1,2.3-3.9,12.7,3.9,11.5
			c2.7-0.4,12.9-1.6,14-6.3c0.5-2.1,2.6-6.4,3.6-8.5c2.2-5.2,14.4-32.4,9-37.6c-2.8-2.6-5-5.3-7.1-8.5c-3.3-5.2-1.8-5.8,1.1-10.2
			c3-4.6,5.7-10,8.3-14.8c5.9-11.4,1.5-21.2,6.7-36.4C231.187,69.521,223.187,16.221,207.187,2.821z"
            />
          </svg>
          Cat
        </CustomToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
