import * as React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { withStyles } from "@material-ui/styles";

import "../MainForm/MainForm.css";

const CustomToggleButton = withStyles({
  root: {
    backgroundColor: "whitesmoke",
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
          Choice the service
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
        <CustomToggleButton value="overexposure">
          <svg
            viewBox="0 0 500 500"
            className="svg-for-icon"
            width="22px"
            height="22px"
          >
            <path
              d="M186.516,278.534l-22.72-0.007l19.747-51.855l80.916,31.517c2.474,0.925,5.059,1.393,7.683,1.393c0,0,0,0,0.001,0
		c9.116,0,17.383-5.741,20.571-14.285c4.231-11.34-1.552-24.015-12.816-28.223c0,0-160.754-62.335-162.569-62.625
		c-2.188-0.746-4.494-1.154-6.847-1.154c-5.961,0-11.651,2.507-15.668,6.89l-80.859,73.097c-1.13,1.021-1.82,2.43-1.95,3.934
		c-0.024,0.121-0.051,0.24-0.068,0.362L0.23,323.515c-0.826,5.618,0.587,11.222,3.981,15.777c3.391,4.552,8.352,7.514,13.972,8.34
		c1.025,0.15,2.068,0.227,3.1,0.227c0,0,0,0,0,0c10.456,0,19.489-7.81,21.019-18.229l1.616-11.863
		c1.3,2.545,3.024,5.093,5.284,7.567c0.119,0.131,0.245,0.257,0.375,0.376l24.614,22.582l-50.868-0.013
		c-12.107,0-21.956,9.851-21.956,21.959c0.002,12.104,9.852,21.954,21.958,21.957h108.604c0,0-0.001,0,0,0c0.485,0-0.344,0.016,0,0
		c6.198-0.268,11.92-3.1,16.113-7.671c4.193-4.571,6.355-10.501,6.088-16.698c-0.267-6.199-2.933-11.923-7.523-16.134
		l-32.162-29.261l50.104,0.014l-0.02,47.818c-0.001,5.866,2.284,11.381,6.432,15.528c4.148,4.147,9.662,6.431,15.527,6.431h0.001
		c12.104-0.003,21.953-9.853,21.956-21.956c0,0,0.027-69.327,0.027-69.776C208.473,288.386,198.622,278.537,186.516,278.534z
		 M52.389,255.59l4.632-4.188l-6.373,16.967L52.389,255.59z"
            />
            <path
              d="M322.475,386.416c-0.004-0.019-0.006-0.04-0.01-0.059c0,0-6.706-29.294-6.832-29.58
		c-4.328-12.768-40.624-13.16-44.995-13.16c-4.371,0-40.673,0.392-44.996,13.161c-0.126,0.287-6.83,29.578-6.83,29.578
		c-0.004,0.02-0.006,0.04-0.01,0.06c-0.009,0.043-0.014,0.087-0.022,0.13c-0.057,0.305-0.093,0.611-0.093,0.921
		c0,5.982,5.876,10.576,17.466,13.658c9.275,2.467,21.523,3.825,34.484,3.825c12.962,0,25.209-1.358,34.485-3.825
		c11.59-3.081,17.466-7.677,17.466-13.657c0-0.31-0.036-0.617-0.093-0.92C322.489,386.503,322.484,386.459,322.475,386.416z
		 M304.743,359.082c-4.172,2.324-15.889,5.455-34.104,5.455c-18.213,0-29.933-3.131-34.105-5.456
		c4.156-2.325,15.865-5.465,34.105-5.465C288.879,353.616,300.587,356.756,304.743,359.082z"
            />
            <path
              d="M475.732,308.379c-11.79-19.141-30.883-33.279-52.784-39.22c-2.506-7.819-10.984-24.631-39.046-37.366l-65.76-30.105
		c-2.365-1.083-5.159-0.518-6.919,1.398c-1.759,1.918-2.082,4.75-0.799,7.014l7.539,13.31l-10.142-0.412
		c-2.395-0.086-4.599,1.227-5.641,3.374c-1.042,2.146-0.714,4.706,0.836,6.52l10.695,12.514c-4.313,7.434-3.987,16.827,0.942,23.958
		l-10.904,26.258c-0.643,1.549-0.609,3.296,0.095,4.818c0.704,1.522,2.013,2.682,3.61,3.194c5.19,1.669,10.492,2.515,15.757,2.515
		c14.213,0,27.177-6.158,35.899-16.772l3.702,3.412l0.114,51.571c-10.056,16.614-28.519,45.931-28.71,46.233
		c-1.164,1.849-1.232,4.185-0.176,6.098c1.056,1.913,3.068,3.101,5.253,3.101h18.066c2.028,0,3.918-1.025,5.026-2.723l29.035-44.523
		c-0.258,4.803,0.383,11.434,3.93,18.873c-9.434,2.558-19.605,8.961-19.605,22.373c0,3.313,2.686,6,6,6h66.036
		c0.07,0,0.141-0.001,0.211-0.004c10.083-0.354,30.86-7.901,37.331-33.927C490.109,346.605,486.703,326.191,475.732,308.379z"
            />
            <path
              d="M198.678,172.394c24.788,0,44.955-20.166,44.955-44.954s-20.167-44.954-44.955-44.954
		c-24.787,0-44.953,20.166-44.953,44.954S173.891,172.394,198.678,172.394z"
            />
          </svg>
          Overexposure
        </CustomToggleButton>
        <CustomToggleButton value="walking">
          <svg
            x="0px"
            y="0px"
            className="svg-for-icon"
            viewBox="0 0 470 470"
            width="22px"
            height="22px"
          >
            <path
              d="M79.697,90.601c24.788,0,44.955-20.166,44.955-44.954S104.485,0.692,79.697,0.692c-24.787,0-44.953,20.166-44.953,44.954
		S54.91,90.601,79.697,90.601z"
            />
            <path
              d="M420.741,275.908c-0.592-1.569-1.814-2.819-3.369-3.447l-19.988-8.063c-1.51-6.524-6.424-11.762-12.761-13.732
	l-1.035-11.936c-0.206-2.377-1.801-4.405-4.062-5.167c-2.26-0.762-4.758-0.112-6.361,1.655l-3.758,4.145l-2.643-9.25
	c-0.715-2.502-2.96-4.258-5.561-4.348c-2.615-0.117-4.963,1.506-5.85,3.951l-23.17,63.923l-219.549-44.286v-81.008l15.211,16.391
	c3.48,4.053,8.531,6.374,13.882,6.374c0.001,0,0,0,0,0c0.163,0-0.162-0.018,0-0.021c0.02,0-0.02,0.003,0,0.003h53.445
	c10.191,0,18.483-8.29,18.483-18.48c0-10.194-8.292-18.487-18.483-18.487h-45.195l-43.673-46.89c-0.266-0.286,0.304,0.223,0,0
	c-4.289-4.592-10.392-7.471-17.156-7.471H60.558c-8.589,0-16.112,4.637-20.208,11.536c-0.161,0.228,0.131-0.254,0,0L1.859,186.063
	c-0.054,0.105-0.104,0.212-0.152,0.319c-2.406,5.451-2.174,11.397,0.107,16.442c0.075,0.213-0.1-0.205,0,0l54.21,118.127
	l-43.917,59.643c-7.406,8.859-6.317,22.1,2.467,29.608l0.492,0.423c3.823,3.269,8.696,5.068,13.723,5.068
	c6.194,0,12.053-2.698,16.075-7.403c0.095-0.11-0.086,0.117,0,0c0,0,54.303-73.986,54.489-74.714
	c2.741-5.021,3.475-11.12,1.485-16.948c-0.062-0.182,0.079,0.174,0,0l-5.771-12.831l18.963,13.314l-7.106,67.516
	c-0.619,5.612,0.983,11.129,4.513,15.534c3.53,4.406,8.565,7.174,14.164,7.79l0.638,0.072c0.774,0.085,1.559,0.129,2.334,0.129
	c10.781,0,19.804-8.092,20.992-18.852l8.04-76.408c2.39-8.137-0.261-17.274-7.381-22.74c-0.042-0.032-0.083-0.064-0.126-0.095
	l-37.461-27.231v-1.232l180.3,36.369l-46.69,3.386c-13.112,1.098-26.044-4.206-34.578-14.179c-2.155-2.517-5.942-2.811-8.46-0.657
	c-2.518,2.154-2.812,5.942-0.657,8.46c9.326,10.897,22.705,17.469,36.819,18.396c-5.609,6.695-10.614,16.822-11.536,31.984
	l-19.735,8.772c-1.514,0.673-2.683,1.942-3.229,3.507l-10.598,30.399c-0.527,1.512-0.428,3.172,0.275,4.609
	c0.703,1.439,1.951,2.536,3.467,3.05l8.152,2.759c0.637,0.216,1.286,0.318,1.924,0.318c2.448,0,4.74-1.51,5.631-3.931l7.274-19.78
	l11.932-1.436l-3.517,4.242c-1.126,1.358-1.598,3.145-1.288,4.883l5.841,32.741c0.511,2.862,2.999,4.946,5.907,4.946h7.839
	c1.772,0,3.453-0.783,4.593-2.14c1.14-1.357,1.622-3.147,1.318-4.893l-3.602-20.633l38.324-28.761
	c0.087-0.065,0.173-0.134,0.258-0.204c2.994-2.515,5.336-5.227,7.182-8.028c12.523,2.986,27.655,6.389,40.982,8.807l7.879,50.771
	c0.454,2.924,2.971,5.08,5.929,5.08h7.34c3.314,0,6-2.686,6-6v-44.575l13.528,2.949l16.908,27.682
	c0.839,1.373,2.195,2.353,3.763,2.717c0.449,0.104,0.904,0.155,1.358,0.155c1.13,0,2.248-0.319,3.217-0.936l5.33-3.386
	c2.414-1.533,3.41-4.557,2.38-7.225l-13.25-34.338c-0.59-1.53-1.781-2.752-3.296-3.381l-21.895-9.095l9.286-42.753
	c1.655,0.222,3.322,0.343,4.999,0.343c14.338,0,27.462-8.381,34.248-21.871C421.241,279.224,421.333,277.478,420.741,275.908z
	 M67.671,150.447l-24.532,43.972l20.713,42.707c3.94,8.133,1.958,17.972-4.819,23.927c-1.139,1.002-2.552,1.493-3.958,1.493
	c-1.666,0-3.323-0.689-4.509-2.039c-2.188-2.489-1.943-6.28,0.546-8.468c2.738-2.406,3.537-6.387,1.942-9.679l-22.076-45.517
	c-0.855-1.762-0.795-3.831,0.159-5.541l26.055-46.701c1.614-2.895,5.27-3.932,8.163-2.316
	C68.248,143.899,69.285,147.554,67.671,150.447z"
            />
          </svg>
          Walking
        </CustomToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}